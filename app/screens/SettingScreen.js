import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {useRoute} from '@react-navigation/native'




const showAlert = () =>
  Alert.alert(
    'Doleap Corporation',
    'Основатель: Шомирсаидов Абубакр',
    [
      {
        text: 'Понятно',
        // onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        console.log('')
    },
  );



export default function App({navigation}) {

	const route = useRoute()

	return (

		<View style={styles.wrapper}>
			<TouchableOpacity style={styles.block} onPress={() => navigation.navigate('О нас')}>
				<Text style={{fontSize: 20, fontWeight: 'semibold'}}>О нас</Text>
				<Ionicons name={'arrow-forward'} size={30} color={'royalblue'} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.block}>
				<Text style={{fontSize: 20, fontWeight: 'semibold'}}>Связаться</Text>
				<Ionicons name={'arrow-forward'} size={30} color={'royalblue'} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.block}>
				<Text style={{fontSize: 20, fontWeight: 'semibold'}}>Сообщить о проблеме</Text>
				<Ionicons name={'arrow-forward'} size={30} color={'royalblue'} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.block}>
				<Text style={{fontSize: 20, fontWeight: 'semibold'}}>Как мы пролучаем данные ?</Text>
				<Ionicons name={'arrow-forward'} size={30} color={'royalblue'} />
			</TouchableOpacity>
		</View>

		)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 15,
		height: '100%',
	},
	block: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 15,
		shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.3,
        shadowRadius: 2, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13
	}
})