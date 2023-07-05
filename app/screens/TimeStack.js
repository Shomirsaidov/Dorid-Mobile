import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Time from './Time.js'
import Routes from './Routes.js'
import {useRoute} from '@react-navigation/native'
import SettingScreen from '../screens/SettingScreen.js'
import About from '../components/About.js'




import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


const Stack = createNativeStackNavigator();


export default function App() {

	const route = useRoute()

	return (

		<NavigationContainer independent={true}>
	      <Stack.Navigator>
	        <Stack.Screen
	          name="Time"
	          options={{title: 'Welcome',headerShown: false}}
	          component={({navigation}) => <Time showProps={true} {...{navigation: navigation}} />}
	        />
	        <Stack.Screen 
	        name="Маршрут"
	        options={{title: route.params !== undefined ? route.params.route : 'Маршрут'}}
	        component={({navigation}) => <Routes showProps={true} {...{navigation: navigation}} />}
	        />
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