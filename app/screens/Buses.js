import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {useRoute} from '@react-navigation/native'



export default function App({navigation}) {




    const [recentRoutes, setRecent] = useState([
        {id: 1, num: '17', routes: 'Панчшанбе, Универмаг, ХГУ, ТГУ 27-28 мкр.'},
        {id: 2, num: '9', routes: '8-12 мкр, 20-34 мкр.'},
        {id: 3, num: '116', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 27-28 мкр.'},
        {id: 4, num: '19', routes: 'Мед.колледж, Панчшанбе, Шёл. комбинат'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},

    ])


    const [buses, setBuses] = useState([
        {id: 1, num: '1', routes: 'Панчшанбе, Универмаг, ХГУ, ТГУ 27-28 мкр.'},
        {id: 2, num: '2', routes: '8-12 мкр, 20-34 мкр.'},
        {id: 3, num: '3', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 27-28 мкр.'},
        {id: 4, num: '4', routes: 'Мед.колледж, Панчшанбе, Шёл. комбинат'},
        {id: 5, num: '5', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '6', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
        {id: 5, num: '7', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},
    ])




	return (

        <ScrollView style={{...styles.wrapper}}>
            <Text style={{fontWeight: 'bold', fontSize: 26, 
            marginVertical: 15, marginBottom: 20}}>
                Куда хотите добраться ?
            </Text>
            <TextInput style={styles.blockInput} 
            placeholder='Мактаби Пулотов...'
            />

<           View style={{ borderTopWidth: 1, borderBottomWidth: 1,marginBottom: 13, marginTop: 24}}>
                <Text style={{fontWeight: 'bold', fontSize: 23, padding: 15}}>Микроавтобусы</Text>
            </View>
            <ScrollView style={{...styles.wrapper, height: 300}}>

                {recentRoutes.map(route => {
                return (
                <TouchableOpacity 
                style={{flexDirection: 'row',alignItems: 'center', paddingRight: 25, marginBottom: 14}}
                onPress={() => navigation.navigate('Время', {route: route.num})}>
                

                <Text style={{fontSize: 26, fontWeight: 'bold',marginRight: 12, padding: 10,
                borderRadius: 10, color: '#68a468', borderWidth: 1}}>{route.num}</Text>
                <Text style={{fontSize: 18, fontWeight: '500', paddingRight: 35}}>
                    {route.routes}</Text>
                

                </TouchableOpacity>
                )
                })
                }

                
            </ScrollView>
            <TouchableOpacity style={styles.btn1}>
                <Text style={{color: 'royalblue',fontWeight: 'semibold', fontSize: 20}}>Посмотреть все</Text>
            </TouchableOpacity>

            <View style={{ borderTopWidth: 1, borderBottomWidth: 1,marginBottom: 13, marginTop: 24}}>
                <Text style={{fontWeight: 'bold', fontSize: 23, padding: 15}}>Автобусы</Text>
            </View>
            <ScrollView style={{...styles.wrapper, height: 300}}>

                {buses.map(route => {
                return (
                <TouchableOpacity 
                style={{flexDirection: 'row',alignItems: 'center', paddingRight: 25, marginBottom: 14}}
                onPress={() => navigation.navigate('Время', {route: route.num})}>
                

                <Text style={{fontSize: 26, fontWeight: 'bold',marginRight: 12, padding: 10,
                borderRadius: 10, color: '#68a468', borderWidth: 1}}>{route.num}</Text>
                <Text style={{fontSize: 18, fontWeight: '500', paddingRight: 35}}>
                    {route.routes}</Text>
                

                </TouchableOpacity>
                )
                })
                }
            </ScrollView>
            <TouchableOpacity style={{...styles.btn1, marginBottom: 160}}>
                <Text style={{color: 'royalblue',fontWeight: 'semibold', fontSize: 20}}>Посмотреть все</Text>
            </TouchableOpacity>


        </ScrollView>

		)
}



const styles = StyleSheet.create({
	wrapper: {
		padding: 15,
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
    blockInput: {
        color: '#68a468',
        backgroundColor: '#fff',
		padding: 15,
        fontSize: 19,
		borderRadius: 15,
		shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.3,
        shadowRadius: 2, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 23,
        fontWeight: 'bold'
    },
    btn1: {
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#fff',
        color: 'royalblue'
    }
})