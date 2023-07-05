import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {useRoute} from '@react-navigation/native'



export default function App({navigation}) {
	return (
		<View style={styles.wrapper}>

			<View style={styles.block}>
				<Text style={styles.label}>Основатель: </Text>
				<Text style={styles.emtext}>Шомирсаидов Абубакр</Text>
			</View>

			<View style={styles.block}>
				<Text style={styles.label}>Наставник: </Text>
				<Text style={{...styles.emtext, fontWeight: 400}}>Рахимов Комилчон</Text>
			</View>

			<View style={{flexDirection: 'column', justifyContent: 'center', 
			alignItems: 'center', marginVertical: 30}}>
				<Image source={require('../assets/doleap.png')}/>
			</View>

		</View>

		)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 5,
		height: '100%',
		backgroundColor: '#fff'
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
	},
	label: {
		fontSize: 19,
		color: 'grey'
	},
	emtext: {
		fontWeight: 'bold',
		fontSize: 19
	}
})