import React, {useEffect, useState} from 'react';
import {Dimensions, Text, FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { Product } from '../Component/Product.js';
import { getProducts } from '../services/ProductsService.js';
import {AntDesign, Ionicons, FontAwesome} from '@expo/vector-icons'


const width = Dimensions.get('window').width/2 -30;

export function Home ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
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
            
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>Buy Afrik </Text>
        </View>                   

      <View 
        style ={{flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'}}>  
        <Ionicons name = 'ios-menu-outline' size ={24} color='black'/>  
      
      <View style ={{flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between'}}>
          <AntDesign name = 'search1' size ={24} color='black'/>  
          <Ionicons name = 'notifications-outline' size ={24} color='black'/> 
      </View>

    </View>
     
     <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

 