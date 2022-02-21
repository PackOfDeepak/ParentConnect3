import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
  ImageBackground
} from 'react-native';


// You can import from local files

// or any pure javascript modules available in npm
const category = [{id:'01',name:'school',image:require('./assets/icon.png')},{id:'02',name:'swim',image:require('./assets/icon.png')},{id:'03',name:'coding',image:require('./assets/icon.png')}]
export default class CategoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:''
        }

        
    }
   
    render(){
  return (
    <View style={styles.container}>
      <ScrollView>
          {category.map((a)=>{
              return(
                  <ImageBackground source={a.image}
                  style = {{width:'90%',height:150,alignSelf:'center', marginTop:10,}}>
                      <Text>{a.name}</Text>
                  </ImageBackground>
              )
          })}
      </ScrollView>
    </View>
    
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    alignSelf: 'center',
    width: '40%',
    height: '40%',
  },
  heading: {
    color: 'white',
    marginLeft: '10%',
    fontWeight: 'bold',
    fontSize: 25,
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,
    
    marginTop: '5%',
    flexDirection: 'row',
  },
  googleText: {
    color: 'white',
    marginLeft: '3%',
    marginTop: '3%',
    fontFamily: 'Arial',
    
  },
  text: {
    color: 'white',
    marginLeft: '10%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  textinput: {
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,
    
    marginTop: '3%',
    alignSelf: 'center',
    padding: '3%',
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#0099FF',
    width: '81%',
    height: '8%',
    borderRadius: 10,
    
    marginTop: '5%',
    flexDirection: 'row',
  },
  logintext: {
    color: 'white',
    marginLeft: '40%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  signup: {
    color: 'white',
    marginLeft: '30%',
    marginTop: '3%',
    fontFamily: 'Arial',
    fontSize: 10
  }
});
