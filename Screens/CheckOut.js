import React from 'react';
import { View, TextInput, TouchableOpacity, Button } from 'react-native';

const CheckOut = () => {
  return (
   <View>
       <TextInput 
          placeholder="Name" />
        
        <TextInput 
          placeholder="Address" />

        <TextInput 
          placeholder="Phone" />

    <TextInput 
          placeholder="Email" />

     <TouchableOpacity
                >
                    <Button
                        
                        style ={{width: 300,
                                height: 30,
                                marginBottom: 10, 
                                marginTop: 30,
                    }}
                        title="Submit"
                    />
                </TouchableOpacity>     

   </View>
  );
};
export default CheckOut;