import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoadingScreen} from './src/screens/loading';
import {MainScreen} from './src/screens/main';
import {DetailScreen} from './src/screens/detail';
import {AuthScreen} from './src/screens/auth';

const MainStack = createStackNavigator(
  {
    Loading: {screen: LoadingScreen},
    Auth: {screen: AuthScreen},
    Main: {screen: MainScreen},
    Detail: {screen: DetailScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Loading',
  },
);

const RootStack = createSwitchNavigator(
  {
    MainStack: { screen: MainStack },
  },
  {
    initialRouteName: 'MainStack'
  }
);

export default class App extends React.Component { 
  render () { 
    const AppRoot = createAppContainer(RootStack);
    return ( 
      <AppRoot />
    ); 
  } 
}