import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({name,  price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>GHC {price}</Text>
      
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'floralwhite',
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: 90,
    height: 100,
    paddingRight: 5,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});

