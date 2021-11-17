
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, ButtonProps, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'; 
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}){
    //const navigation =params.navigation;
    return (
        <View style={{
            backgroundColor: 'white',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            borderRadius: 5, 
            paddingVertical: 10,
            marginVertical: 5, 
            alignItems: 'center',
           
            
 
        }}>
        <ImageBackground
            source={require('../assets/products/background1.jpg')}
            style={styles.backGround}>

                <Image
                    style={{height: 150,
                            width: 150,}}
                            source={require('../assets/products/logo.jpg')}
                />

                <Text style={styles.text}>Sign - In</Text>
                <Text style={{fontSize: 17,marginLeft: 15,  color: 'black', fontWeight: '600'}}>Email or mobile phone number</Text>
                <View>
                
                <View style={{marginTop: 10, alignItems:'center' }}>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor='black'
                        // paddingHorizontal= {15}                   
                        placeholder="   Email" />

                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor='black'
                        
                    />
                    
                        <TouchableOpacity
                        >
                            <Button
                                onPress= {() =>{navigation.navigate('Products')}}
                                style ={{width: 300,
                                        height: 30,
                                        marginBottom: 10, 
                                        marginTop: 30,
                                        backgroundColor: 'khaki',
                            }}
                                title="Submit"
                            />
                        </TouchableOpacity> 
                    </View>

                </View>
                
                <View style={{marginTop: 15}}>
                    <TouchableOpacity 
                    onPress={() =>{navigation.navigate('Products')}}
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
                    onPress={() =>{navigation.navigate('Products')}}
                    style = {{backgroundColor: 'grey', 
                    padding:  10,
                    marginBottom: 20, 
                    marginTop: 10, 
                    paddingHorizontal: 40,
                    flexDirection: 'row', 
                    alignItems: 'center'}}>  
                    <AntDesign name ='apple1'size={24} color= 'white' />          
                    <Text style={{fontSize: 15, marginLeft: 15, color: 'black',}}>Log in with Apple</Text>
                    </TouchableOpacity>
                    </View>

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

            </ImageBackground>   
        </View>
        
        

        
    );
}

const styles = StyleSheet.create({
        text: {
            fontSize: 24,
            marginLeft: 15,  
            color: 'black', 
            fontWeight: '400'
        }, 
        input: {
            margin: 13,
            borderColor: '#7a42f4',
            backgroundColor: "grey",
            borderRadius: 5,
            alignItems: "center",
            padding: 10,
            textAlign: 'center',
            borderColor: 'gray'
            
         },
         backGround: {
             height: Dimensions.get('window').height,
            
             
             
         }





})
