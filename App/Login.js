import React, { useState } from 'react';
import {View, Text,TextInput,StyleSheet,TouchableOpacity} from "react-native"
import { RadioButton } from 'react-native-paper';



function Login({ navigation }) {
    const [checked, setChecked] = useState('first');

  return (
    <View style={styles.ContainerDiv}>
   <Text style={styles.details}> Enter Your Details</Text>    
    <View style={styles.container}>     
      <View>
        <Text>Name</Text>
        <TextInput type="text" style={styles.name} />
      </View>
      <View style={styles.age}>
        <Text>Age</Text>
        <TextInput type="text" style={styles.name} />
      </View>
      <View>
        <Text>Gender</Text>
        <RadioButton.Group style={styles.radioboxarea} onValueChange={newValue => setChecked(newValue)} value={checked}>
           <View style={styles.checks}>             
             <RadioButton value="first" />
             <Text>Male</Text>
            </View>
            <View style={styles.checks}>              
              <RadioButton value="second" />
              <Text>Female</Text>
            </View>
      </RadioButton.Group>       
      </View>      
      <TouchableOpacity onPress={this._onPress} style={styles.buttontop}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Eyes')}>Test Eye</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    ContainerDiv:{
        padding:10
    },
    container:{
        backgroundColor:"#fff",
        padding:30,
        shadowOffset: {
            width: 0,
            height: 2,
        },       
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius:10
    },
    radioboxarea:{
      
    },
    age:{
        marginTop:10
    },
    checks:{
        width: '50%',
        flexDirection:"row",
        alignItems:"center"
    },
    name: {
     borderColor:"#ccc",
     borderWidth: 1,
     padding:10,
     width:280,
     marginTop:8,
     borderRadius:10
      },
      details:{
        fontSize:24,
        textAlign:"center",
        marginBottom:20,
        fontWeight: 'bold',
      },
      buttonText:{
        backgroundColor:"#0d6efd",
        marginTop:30,
        textAlign:"center",
        color:"#fff",
        padding:10,
        borderRadius:10
      },
})
export default Login
