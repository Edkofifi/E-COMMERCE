import React from 'react'; 
import {Text, styles, Image, View,StyleSheet, TouchableOpacity} from 'react-native';


export function Product({name, image, price}){
    return (
        <TouchableOpacity>
            <image  
                style ={styles.productImage}  
                source={image}/>
            <View>
                <Text style={styles.productName}>{name} </Text>
                <Text style={styles.productPrice}>{price} </Text>
            </View>    
        </TouchableOpacity>



    )
}

const styles = StyleSheet.create({
    productImage: {
        height: 200,
        width:  150,
    },

    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },

    productPrice: {
        fontSize: 18,
        fontWeight: 500,
        color: 'floralwhite'
    }




})