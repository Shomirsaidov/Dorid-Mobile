import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import About from '../components/About.js'
import {useRoute} from '@react-navigation/native'
import SettingScreen from './SettingScreen.js'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


const Stack = createNativeStackNavigator();


export default function App() {

	const route = useRoute()

	return (

		<NavigationContainer independent={true}>
	      <Stack.Navigator>
	        
	        <Stack.Screen 
	        name="Настройки"
	        component={({navigation}) => <SettingScreen showProps={true} {...{navigation: navigation}} />}
	        />


	        <Stack.Screen 
	        name="О нас"
	        component={({navigation}) => <About showProps={true} {...{navigation: navigation}} />}
	        />
	      </Stack.Navigator>
	    </NavigationContainer>

		)
}