
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button, styles, TextInput, StyleSheet, ButtonProps, TouchableOpacity } from 'react-native'; 
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}){
    //const navigation =params.navigation;
    return (
        <View style={{
            backgroundColor: '#ffffb',
            flex: 1,
            paddingTop: 55,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            
            
        }}>
             <Text style={{fontSize: 30, color: 'grey'}}>afribu</Text>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>Buy Afrik </Text>
                                    
            <Image
                style={{                   
                    borderRadius: 20,
                    width: 50,
                    height: 60,
                    marginBottom: 20,
                    transform: [{rotate: '5deg'}],

                }}
                source={{
                    uri: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNob3BwaW5nJTIwcmlkZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60',
                 }}
                

            />
            <Text style={{fontSize: 24,marginLeft: 15,  color: 'black', fontWeight: '400'}}>Sign - In</Text>
            <Text style={{fontSize: 17,marginLeft: 15,  color: 'black', fontWeight: '600'}}>Email or mobile phone number</Text>
            <TextInput     
                styles ={
                    {
                      height: 40,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      marginTop: 20,
                     
                    }}
              placeholder="Enter Email"/>
              <br/>

            <TextInput     
                styles ={
                    {
                      height: 40,
                      margin: 15,
                      borderWidth: 1,
                      padding: 10,
                     
                    }}
              placeholder="Enter Password"/>
              <br/>
              

            <Button
                style ={{width: 300,
                        height: 30,
                        marginBottom: 10, 
                        marginTop: 30,
              }}
                title="Submit"
            />
             
                        
            <TouchableOpacity 
            onPress={() =>{navigation.navigate('Home')}}
            style = {{backgroundColor: 'grey', 
            padding:  10, 
            marginTop: 20,
            paddingHorizontal: 40, 
            flexDirection: 'row', 
            alignItems: 'center'}}>
                
            <AntDesign name ='google'size={24} color= 'red' />
            <Text style={{fontSize: 15,marginLeft: 15,  color: 'black'}}>Log in with Gmail</Text>
            
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() =>{navigation.navigate('Home')}}
            style = {{backgroundColor: 'black', 
            padding:  10,
            marginBottom: 20, 
            marginTop: 10, 
            paddingHorizontal: 40,
            flexDirection: 'row', 
            alignItems: 'center'}}>  
            <AntDesign name ='apple1'size={24} color= 'white' />          
            <Text style={{fontSize: 15, marginLeft: 15, color: 'white' ,}}>Log in with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{fontSize: 15,
                marginLeft: 15,  
                color: 'black',
                marginBottom: 20,
                fontWeight: 500,
                color: 'grey'}}>Not a member?
                 <text style={{color: 'orange'}}> Sign up</text>
                </Text>
            </TouchableOpacity>
            
        </View>
        

        
    );
}

  
