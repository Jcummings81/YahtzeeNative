import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component {
  state = { isReady: false }
  

  getReady = () => {
    return new Promise(resolve => setTimeout(() => resolve("Done"), 3000))
  }

  render() {
    if (!this.state.isReady)
      return (
        <AppLoading
          startAsync={this.getReady}
          onFinish={ () => this.setState({ isReady: true }) }
          onError={console.warn}
        />
      )
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
        </View>
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});