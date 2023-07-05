import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import {useRoute} from '@react-navigation/native'




export default function App({navigation}) {
	const route = useRoute()

	const [dirversAvailable, setDriversAvailable] = useState([
		{avatar:  require('../assets/user1.png'), name: 'Эшонов Фаррух', carNum: '2023ko06', phone: '+992 92 802 00 32'},
		{avatar: require('../assets/user_anime.png'), name: 'Тураев Тупи', carNum: '4554df06', phone: '+992 93 444 67 76'},
		{avatar: require('../assets/user4.png'), name: 'Рафиев Абдурахим', carNum: '1719cb06', phone: '+992 92 909 34 34'},
		{avatar: require('../assets/user2.jpg'), name: 'Курбонов Далер', carNum: '5567ss06', phone: '+992 92 888 78 40'},
		{avatar: require('../assets/user3.jpg'), name: 'Набиев Комрон', carNum: '3222hg06', phone: '+992 92 677 77 09'},

	])

	return (
		<ScrollView style={{padding: 20, backgroundColor: '#fff', height: '100%'}}>
			<View style={styles.block}>
              

            	<Text style={{fontSize: 26, fontWeight: 'bold',marginRight: 12, padding: 7,
              	borderRadius: 2, color: '#68a468', borderWidth: 1, backgroundColor: '#fff'}}>{route.params.route}</Text>
            	
            	<View style={{flexDirection: 'row', alignItems: 'center'}}>
	            	<View style={styles.pill}>
	            		<Text style={styles.pillText}>4 работают</Text>
	            	</View>
	            	<View style={{backgroundColor: '#e2e186', padding: 15, border: 1, borderRadius: 25}}>
	            		<Text style={styles.pillText}>12 в общем</Text>
	            	</View>
	            </View>

            </View>

            <Text style={styles.label}>Самый ближающий к вам:</Text>
        	<Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 20}}>5 мин</Text>



			<View style={{height: 400, width: '94%'}}>
				<WebView
		        source={{
		          uri: 'https://yandex.ru/maps/geo/772016585/?ll=69.612072%2C40.297996&z=17.84',
		        }}
		        onLoad={console.log('Loaded a website !')}
		        />
		    </View>

			<Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 24}}>Доступные водители маршрутки {route.params.route}:</Text>

			<View style={styles.contFlex}>
				{
					dirversAvailable.map((driver,index) => {
						return (
							<View style={styles.card}>
								
								<View style={{alignItems: 'center',justifyContent: 'space-between', flexDirection: 'row', marginBottom: 7}}>
									<View style={{alignItems: 'center', flexDirection: 'row', marginBottom: 12}}>
										<Image source={driver.avatar}
										style={{width: 40, height: 40, marginRight: 10, borderRadius: 30}}/>
										<Text style={{fontSize: 19, fontWeight: '500'}}>{driver.name}</Text>
									</View>
									<View style={{display: index == 0 ? 'block' : 'none', ...styles.pill,
									padding: 7, backgroundColor: '#68a468'}}>
										<Text style={{...styles.pillText, fontWeight: '400', 
										color: '#fff'}}>ближающий</Text>
									</View>
								</View>

								<View style={{alignItems: 'center', flexDirection: 'row', marginVertical: 8}}>
									<Ionicons name={'call'} size={24} color={'#000'} 
									style={{marginRight: 10}}/>
									<Text style={styles.label}>{driver.phone}</Text>
								</View>	

								<View style={{alignItems: 'center', flexDirection: 'row', marginVertical: 8}}>
									<Ionicons name={'clipboard'} size={24} color={'#000'} 
									style={{marginRight: 10}}/>
									<Text style={styles.label}>{driver.carNum}</Text>
								</View>								

							</View>
						)
					})
				}
			</View>

		</ScrollView>

		)

}


const styles = StyleSheet.create({
	block: {paddingRight: 25, marginBottom: 14, backgroundColor: '#333',
	borderRadius: 40, flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10},
	pill: {
		padding: 15, border: 1, borderRadius: 25, backgroundColor: '#95c9e1',
		marginRight: 8
	},
	 pillText: {
	 	fontWeight: 'bold',
		color: '#005880',
	 },
	 cont: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 15,
		shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.3,
        shadowRadius: 2, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
		
	},
	card: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 15,
		shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.3,
        shadowRadius: 2, 
        marginVertical: 7,
		
	},
	label: {
	    fontSize: 19,
	    color: 'grey'
	},
	contFlex: {
		marginTop: 15,
		marginBottom: 250,
		flexDirection: 'column'
	}
})




