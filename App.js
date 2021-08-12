import * as React from 'react';
import { Text, View, StyleSheet,Platform, ScrollView, Image,Button,Alert,Pressable  } from 'react-native';
import { Appbar } from 'react-native-paper';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



const MyComponent = () => (
  <View>
 <Appbar.Header style={styles.color}> 
 <View style={styles.headerView}>
 <Image source = {require('./assets/outline_arrow_back_ios_white_36dp.png')} style={styles.icons}/>
    <Text style={styles.contents} >Teacher's favoris</Text>
    </View>
  </Appbar.Header>

  <ScrollView scrollEventThrottle={10} >

  <View>
  <ScrollView horizontal={true}>
  <View style={styles.views}>
  <View style={styles.view1}>
  <Image source = {require('./assets/aymen.png')} style={styles.images}/>
  <Text style={{marginTop:30, marginRight:50, fontWeight: "normal", fontSize:20}}>Pierre du Parc de Locmaria</Text>
  </View>
  <View>
  <Text style={{marginTop:30, marginLeft:30,  fontSize:10, color:'#C0C0C0'}}> Formation</Text>
  <Text style={{marginTop:10, marginLeft:30, fontWeight: "bold", fontSize:10}}>Université Paris Dauphine</Text>
  </View>
   <View>
  <Text style={{marginTop:30, marginLeft:30,  fontSize:10, color:'#C0C0C0'}}>Description</Text>
  <Text style={{marginTop:10, marginLeft:30,marginRight:10, fontWeight: "bold", fontSize:10}}>Calme de patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.</Text>
  </View>
  <View style={styles.view2}>
  <Pressable style={styles.button} onPress={'onPress'}>
      <Text style={styles.text}>Prendre un cours avec ce teacher's</Text>
    </Pressable>

  <Pressable style={styles.button1} onPress={'onPress'}>
      <Text style={styles.text1}>Retirer ce teacher's de mes favoris</Text>
    </Pressable>
  </View>
  </View>



  <View style={styles.views1}>
  <View style={styles.view1}>
  <Image source = {require('./assets/islem.jpg')} style={styles.images}/>
  <Text style={{marginTop:30, marginRight:50, fontWeight: "normal", fontSize:20}}>Pierre du Parc de Locmaria</Text>
  </View>
  <View>
  <Text style={{marginTop:30, marginLeft:30,  fontSize:10, color:'#C0C0C0'}}> Formation</Text>
  <Text style={{marginTop:10, marginLeft:30, fontWeight: "bold", fontSize:10}}>Université Paris Dauphine</Text>
  </View>
   <View>
  <Text style={{marginTop:30, marginLeft:30,  fontSize:10, color:'#C0C0C0'}}>Description</Text>
  <Text style={{marginTop:10, marginLeft:30,marginRight:10, fontWeight: "bold", fontSize:10}}>Calme de patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.</Text>
  </View>
  <View style={styles.view2}>
  <Pressable style={styles.button} onPress={'onPress'}>
      <Text style={styles.text}>Prendre un cours avec ce teacher's</Text>
    </Pressable>

  <Pressable style={styles.button1} onPress={'onPress'}>
      <Text style={styles.text1}>Retirer ce teacher's de mes favoris</Text>
    </Pressable>
  </View>
  </View>
  </ScrollView>
  </View>
  </ScrollView>
  </View>
);


export default MyComponent
// style
const styles = StyleSheet.create({
  headerView:{
    marginTop:30,
    marginLeft: 20,
  },//style of head
  color:{
    backgroundColor: '#186DC1',
    height: 250,
  },//head background and size
  contents:{
    marginTop:30,
    fontWeight: 'normal',
    fontSize: 28,
    color: '#ffffff',
  },  //appbar content
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#186DC1',
    marginTop:20,
  },//first button
  text: {
    fontSize: 9,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },//text of first button
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor:'#FF8C00',
    borderWidth:2,
    elevation: 0,
    backgroundColor: '#00000000',
    marginTop:20,
  },//second button
  text1: {
    fontSize: 9,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.20,
    color: '#FF8C00',
  },//text of second button
  view2:{
marginTop:50,
width:230,
  position: 'absolute',
    bottom:50,
    left:20,
    right: 20,
    borderRadius: 50,
  } ,//view of buttons
  view1:{
    flexDirection:'row',
  },//view of picture and name
  views:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
    height:450, 
    width:260, 
    backgroundColor: '#ffffff',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    borderRadius: 10,
  },//view global

   views1:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
    height:450, 
    width:260, 
    backgroundColor: '#ffffff',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    borderRadius: 10,
  },//view global1

  images:{ width: 50, height: 50,
  borderRadius: 50,
    marginTop: 30,
    marginLeft:30,
    marginRight: 10,
  },//image
   icons:{ width: 30, height: 30,
  },//image
});
