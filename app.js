import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"; 
import {createStackNavigator} from "react-navigation-stack"; 
import HomeScreen from "./screens/Home.js" 
import DetailsScreen from './screens/Details.js';

export default function App() {
  return<AppContainer/>
} 

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen, 
      navigationOptions:{
        headersShown:false
      }
    },
    Details:{
      screen:DetailsScreen, 
    }
  },
  {
    initialRouteName:"Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);