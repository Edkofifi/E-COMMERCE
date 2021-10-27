import React from 'react'
import {View, Text, Image, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';



 export default function cart({navigation}){
    return (
        <View > 
            <Text> Products added to cart appears here, with price ...</Text>
          
          
            <TouchableOpacity
            onPress={() =>{navigation.navigate('Home')}}>
               <Text style={{fontSize: 15, fontWeight: 'bold'}}>Go back</Text>
           </TouchableOpacity>

            
      </View>
        
    
        

        
    );
}