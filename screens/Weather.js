import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain:{
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining like a lonely",
        subtitle: "For more info look outside",
        icon: 'weather-pouring'
    },
    Clear:{
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny like a Beach",
        subtitle: "Go get your water gun",
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunder storm in your house!",
        subtitle: "Actually, outside of your house",
        icon: 'weather-lightning'
    },
    Clouds:{
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds like grey",
        subtitle: "Clouds is covering a sun",
        icon: 'weather-cloudy'
    },
    Snow:{
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow like a white",
        subtitle: "Do you want to make a snow man?",
        icon: 'weather-snowy'
    },
    Drizzle:{
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle is a light rain",
        subtitle: "I like to walk in the rain",
        icon: 'weather-rainy'
    },
    Haze:{
        colors: ['#8ea6b4', '#5588a6'],
        title: "Haze is coming",
        subtitle: "Watch out the car!",
        icon: 'weather-fog'
    },
    Mist:{
        colors: ['#5d8aa8', '#2170a4'],
        title: "Mist is waterful",
        subtitle: "Natural skin in the air",
        icon: 'weather-fog'
    },
    Fog:{
        colors: ['#efdecd', '#d99755'],
        title: "Fog is deep",
        subtitle: "I want to get out here",
        icon: 'weather-fog'
    },
    Smoke:{
        colors: ['#55563e', '#4d5013'],
        title: "Smoke",
        subtitle: "Don't do it!",
        icon: 'weather-fog'
    },
    Dust:{
        colors: ['#8e8971', '#8b781d'],
        title: "Dust is very small",
        subtitle: "but it is very dangerous",
        icon: 'weather-fog'
    },
    Sand:{
        colors: ['#b9a091', '#6c4b36'],
        title: "Sand is yellow",
        subtitle: "I like playground^^",
        icon: 'weather-fog'
    },
    Ash:{
        colors: ['#333', '#4c2424'],
        title: "Ash is like smoke",
        subtitle: "but it is very powerful",
        icon: 'weather-fog'
    },
    Squall:{
        colors: ['#c8ffbd', '#46a034'],
        title: "Squall is strong",
        subtitle: "It is cool!",
        icon: 'weather-windy'
    },
    Tornado:{
        colors: ['#df61c7', '#94127b'],
        title: "Tornado is coming!!",
        subtitle: "Last chance to run!",
        icon: 'weather-hurricane'
    }
};

function Weather({weaName, temp}) {
	return (
		<LinearGradient colors={weatherCases[weaName].colors} style={styles.container}>
			<View style={styles.upper}>
				<MaterialCommunityIcons color="white" size={144} name={weatherCases[weaName].icon} />
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={styles.lower}>
				<Text style={styles.title}>{weatherCases[weaName].title}</Text>
				<Text style={styles.subtitle}>{weatherCases[weaName].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weaName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
	container: {
        flex: 1
	},
	temp: {
		fontSize: 40,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	lower: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25
	},
	title: {
		fontSize: 40,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		fontWeight: '200'
	},
	subtitle: {
		fontSize: 25,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 25
	}
});
