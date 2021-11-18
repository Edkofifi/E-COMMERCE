import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './screens/Register';
import { Home } from './screens/Home.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './Component/CartIcon.js';
import { CartProvider } from './CartContext.js';
import Login from './screens/login.js';
import CheckOut from './screens/CheckOut.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='login' component={Login} 
          options={({ navigation }) => ({
            title: 'Log in',
            headerTitleStyle: styles.headerTitle,
            })} />
            <Stack.Screen name='Register' component={Register} 
          options={({ navigation }) => ({
            title: 'Log in',
            headerTitleStyle: styles.headerTitle,
            })} />
          <Stack.Screen name='Products' component={Home} 
          options={({ navigation }) => ({
            title: 'Mac Book Available',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          
           <Stack.Screen name='CheckOut' component={CheckOut} 
          options={({ navigation }) => ({
            title: 'Shipping Information',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
