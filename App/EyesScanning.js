import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from "react-native";

function EyesScanning({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.scann}>Eyes Scanning Now</Text>  
      <View style={styles.camera}></View>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.submit}><Text style={styles.sub}>Gallery</Text></TouchableOpacity>
        <TouchableOpacity style={styles.submit}><Text style={styles.sub} onPress={() => navigation.navigate('Scanned Eye Preview')}>Submit</Text></TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    scann:{
        textAlign:"center",
        fontSize:24,
        marginVertical:15,
    },
    btnGroup:{
        flexDirection:"row",
        justifyContent:"center"
    },
    submit:{
        backgroundColor:"#0d6efd",
        marginLeft:10,
        borderRadius:30,
        padding:10,
        paddingHorizontal:20,
        overflow:"hidden",       
    },
    sub:{
        color:"#fff",
        fontSize:16,
    },
    camera:{
        backgroundColor:"#fff",
        height:200,
        width:"100%",
        marginBottom:15,
        borderRadius:10
    }
})
export default EyesScanning
