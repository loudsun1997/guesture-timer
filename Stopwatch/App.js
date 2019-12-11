import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {StartStopButton} from './components/StartStopButton'
import {StopWatch} from './components/Stopwatch'
import {LapResetButton} from './components/LapResetButton'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Timer
          </Text>
        </View>

        <View style={styles.container}>
          <StopWatch />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
