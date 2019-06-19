import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Empty</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
