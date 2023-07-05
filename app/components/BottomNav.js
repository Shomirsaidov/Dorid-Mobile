import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

import TimeStack from '../screens/TimeStack.js'
import RoutesScreen from '../screens/Routes.js'
import SettingStack from '../screens/SettingStack.js'
import BusesStack from '../screens/BusesStack.js'


const Tab = createBottomTabNavigator()

export default function App() {

  
  return (
    <NavigationContainer>
     <Tab.Navigator
          tabBarOptions={{showLabel: false}}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
              if (route.name === 'Главная') {
                iconName = 'time'
              }
              if (route.name === 'Профиль') {
                iconName = 'person-circle';
              }
              if (route.name === 'Маршруты') {
                iconName = 'bus';
              }
              if (route.name === 'Избранное') {
                iconName = 'cog';
              }
              return <Ionicons name={iconName} size={40} color={color} />;
            },

            tabBarActiveTintColor: '#83d483',
            tabBarInactiveTintColor: 'lightgray',
            tabBarStyle: {backgroundColor: '#333', paddingBottom: 5, height: 70,
          shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.9,
          shadowRadius: 1,  position: 'absolute', bottom: 15, left: 58, width: '73%',
          borderRadius: '50%'},
          })}>
      <Tab.Screen name="Главная" component={TimeStack}/>
      <Tab.Screen name="Маршруты" component={BusesStack} initialParams={{route: 'Не выбран'}} />
      <Tab.Screen name="Избранное" component={SettingStack} initialParams={{route: 'Не выбран'}} options={{headerShown: false}}/>

     </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
