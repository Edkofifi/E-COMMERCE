import React from 'react'; 
import {Text, styles, Image, View,StyleSheet, TouchableOpacity} from 'react-native';


export function Product({name, price, color, size, reviews, image, promo}){
    return (
        <TouchableOpacity>
            <image  
                style ={styles.productImage}  
                source={image}/>
            <View>
                <Text style={styles.productName}>{name} </Text>
                <Text style={styles.productPrice}>{price} </Text>
                <Text style={styles.productColor}>{color} </Text>
                <Text style={styles.productReviews}>{reviews} </Text>
                <Text style={styles.productSize}>{size} </Text>
                <Text style={styles.productPromo}>{promo} </Text>
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
    },
    productColor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    productSize: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    productPromo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    productPromo: {
       
    },





})