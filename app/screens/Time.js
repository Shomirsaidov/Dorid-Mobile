import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons';


export default function App({navigation}) {

  const [recentRoutes, setRecent] = useState([
        {id: 1, num: 17, routes: 'Панчшанбе, Универмаг, ХГУ, ТГУ 27-28 мкр.'},
        {id: 2, num: 9, routes: '8-12 мкр, 20-34 мкр.'},
        {id: 3, num: 116, routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 27-28 мкр.'},
        {id: 4, num: 19, routes: 'Мед.колледж, Панчшанбе, Шёл. комбинат'},
        {id: 5, num: '3 A', routes: 'Атуш-Сомон, Панчшанбе, Универмаг, ХГУ, ТГУ, 8-12 мкр.'},

    ])
  const [location,setLocation] = useState({coords: {longitude: 50, latitude: 41}})
  const [place_name,setPlace] = useState('Подождите...')
  const [status,setStatus] = useState('Подождите...')

  useEffect(() => {

    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation('Permission to access location was denied');
        return;
      } else {
        setStatus('Wait ...');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // setLocation(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.coords.longitude},${location.coords.latitude}.json?limit=1&access_token=pk.eyJ1IjoiYWJ1YmFrcnNoIiwiYSI6ImNsaDF0NXo3NzA3Y24zb25wMmViZ3ExbTMifQ.mxkSE9xxV486lzxogWKhdw`)
      axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.coords.longitude},${location.coords.latitude}.json?limit=1&access_token=pk.eyJ1IjoiYWJ1YmFrcnNoIiwiYSI6ImNsaDF0NXo3NzA3Y24zb25wMmViZ3ExbTMifQ.mxkSE9xxV486lzxogWKhdw`)
      .then(data => {
        setStatus('');
        setPlace(data.data['features'][0]['place_name'])
        console.log(location)
      })
      .catch(e => {
        setLocation(e)
      })

    })()
  },[])

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row',marginBottom: 25,alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image style={{width: 40, height: 40, marginRight: 10}} source={require('../assets/icon.png')}/>
          <Text style={{fontWeight: 'bold', fontSize: 22}}>Doriiid</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Настройки', {route: 'some'})}>
              <Ionicons style={{marginRight: 12}} name={'cog'} size={40} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{borderWidth: 1.5,borderColor: 'green',borderRadius: '50%', width: 40, height: 40}} source={require('../assets/avatar.jpg')}/>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Вы находитесь в:</Text>
        <Text style={{fontSize: 23, fontWeight: 'semibold', marginBottom: 20}}>{place_name}</Text>
        <View style={{height: 500, width: '90%'}}>
        <WebView
            source={{
              uri: `https://yandex.ru/maps/geo/772016585/?ll=${location.coords.longitude}%2C${location.coords.latitude}&z=17.84`,
            }}
            onLoad={console.log('Loaded a website !')}
            />
        </View>
      </View>

      <View style={{marginVertical: 28, marginBottom: 200}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Недавние</Text>
        <View>

          {recentRoutes.map(route => {
            return (
            <TouchableOpacity 
            style={{flexDirection: 'row',alignItems: 'center', paddingRight: 25, marginBottom: 14}}
            onPress={() => navigation.navigate('Маршрут', {route: route.num})}>
              

              <Text style={{fontSize: 26, fontWeight: 'bold',marginRight: 12, padding: 10,
              borderRadius: 10, color: '#68a468', borderWidth: 1}}>{route.num}</Text>
              <Text style={{fontSize: 18, fontWeight: '500', paddingRight: 15}}>{route.routes}</Text>
            

            </TouchableOpacity>
            )
            })
          }


        </View>
      </View>

        

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  block: {
    padding: 15,
    shadowOffset: {width: 0, height: 0}, shadowColor: '#000', shadowOpacity: 0.9,
    shadowRadius: 1,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 19,
    color: 'grey'
  }

});









