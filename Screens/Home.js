import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Button, Text, FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { Product } from '../Component/Product.js';
import { getProducts } from '../services/ProductsService.js';
import {AntDesign, Ionicons, FontAwesome} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get('window').width/2 -30;

export function Home ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product  {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <SafeAreaView> 
      
      <View style={{
            backgroundColor: '#ffffb',
            flex: 1,
            paddingTop: 55,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            
            
        }}>
            
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Dbees only </Text>
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
        </View>  
      <TouchableOpacity>
        <View 
          style ={{flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between'}}>  
          <Ionicons name = 'ios-menu-outline' size ={35} color='black'/>
          
        
          <View style ={{flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between'}}>
              <Ionicons onPress={() =>{navigation.navigate('login')}} name="person-circle" size={35} color="black" />   
              <AntDesign name = 'search1' size ={35} color='black'/>  
              <Ionicons name = 'notifications-outline' size ={35} color='black'/> 
          </View>
        

        </View>
      </TouchableOpacity>
     
     <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      numColumns={3}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
    padding: 10,
    margin: 10, 
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 18,
    padding: 10
    
  },
  

  
});

 