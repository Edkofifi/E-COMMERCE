
import React from 'react';
import { View, Text, Image, ImageBackground, Button } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign, Ionicons, FontAwesome} from '@expo/vector-icons'


export default function Home({navigation}){
    //const navigation =params.navigation;
    return (
        <View >
            
            
            
            <View 
            style ={{flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between'}}>

                <Ionicons name = 'ios-menu-outline' size ={24} color='black'/>  
                <FontAwesome name = 'motorcycle' size ={24} color='black'/> 
                <View style ={{flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between'}}>
                    <AntDesign name = 'search1' size ={24} color='black'/>  
                    <Ionicons name = 'notifications-outline' size ={24} color='black'/> 
                </View>

            </View>
            <Text style={{fontSize: 30, color: 'cornflowerblue', fontWeight: 'bold'}}>to render all products here!</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>More details soon ...</Text>
            <View 
                 style={{
                    
                    paddingTop: 55,
                    paddingHorizontal: 20,
                    alignItems: 'flex-start',
                    justifyContent: 'center',}}>
                <Image
                style = {{borderRadius: 20,
                    width: 200,
                    height: 300,
                    marginBottom: 20,
                    paddingTop: 20,
                    marginTop: 20, marginLeft: 20,}}
              
                source={{
                    uri: 'https://images.unsplash.com/photo-1624342430388-2f1e77612bba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xpbmclMjBmb3IlMjBzYWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60',
                   
                 }}/>
                <Text style ={{fontSize: 15, fontWeight: '300'}}>Price: $201.99  Stock: Available </Text>
            
               
               
                
            </View>


            <View style ={{alignItems:'center', marginTop: 15}}>
                
                <TouchableOpacity
                onPress={() =>{navigation.navigate('cart')}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>View Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() =>{navigation.navigate('Login')}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Go back</Text>
                </TouchableOpacity>
            </View>
             
          
        </View>
        

        
    );
}