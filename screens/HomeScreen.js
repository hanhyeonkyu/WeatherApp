import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Weather from './Weather';

const API_KEY = "64c731f86d2ba926a2366a5718fc600a";

export default class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
	state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weaName: null,
    refreshing: false
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      const p = position.coords;
      this._getWeather(p.latitude, p.longitude)
    },
    error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weaName: json.weather[0].main,
        isLoaded: true
      });
    });
  }

  handleRefresh = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const p = position.coords;
      this._getWeather(p.latitude, p.longitude)
    },
    error => {
        this.setState({
          error: error
        });
      }
    );
  }

	render() {
		const { isLoaded, error, temperature, weaName } = this.state;
		return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Button
          onPress={this.handleRefresh}
          title="REFRESH"
          color="#acb2b4"
          accessibilityLabel="REFRESH IF YOU WANT"
        />
				{isLoaded ? (<Weather weaName={weaName} temp={Math.ceil(temperature - 273.15)} />) : (
					<View style={styles.loading}>
            <Text style={styles.loadingText}>Getting Now...</Text>
            {error && <Text style={styles.errorText}>{error}</Text>}
					</View>
        )}
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'transparent'
  },
  errorText:{
    color: 'red',
    backgroundColor: 'transparent'
  },  
	loading: {
		flex: 1,
		backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20
	},
	loadingText: {
		fontSize: 30,
    marginBottom: 30,
	}
});
