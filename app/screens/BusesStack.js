import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Time from './Time.js'
import Routes from './Routes.js'
import {useRoute} from '@react-navigation/native'
import SettingScreen from '../screens/SettingScreen.js'
import Buses from './Buses.js'



import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


const Stack = createNativeStackNavigator();


export default function App() {

	const route = useRoute()

	return (

		<NavigationContainer independent={true}>
	      <Stack.Navigator>
	        
	        <Stack.Screen 
	        name="Список"
            options={{headerShown: false}}
	        component={({navigation}) => <Buses showProps={true} {...{navigation: navigation}} />}
	        />
            <Stack.Screen 
	        name="Время"
	        component={({navigation}) => <Routes showProps={true} {...{navigation: navigation}} />}
	        />



	      </Stack.Navigator>
	    </NavigationContainer>

		)
}