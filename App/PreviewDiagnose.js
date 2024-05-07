import React from 'react'
import{ View,Text ,StyleSheet,TouchableOpacity,TextInput}from "react-native"

function PreviewDiagnose() {
  return (
    <View style={styles.container}>
      <Text style={styles.scann}>Preview Diagnose</Text>
      <View style={styles.camera}>
        <View style={styles.left}>
            <Text>Left Eyes</Text>
            <View style={styles.image}></View>
        </View>
        <View style={styles.left}>
            <Text>Right Eyes</Text>
            <View style={styles.image}></View>
        </View>
       
      </View>
      <View style={styles.camera}>
      <TextInput
        multiline
        numberOfLines={4}
        style={{padding: 10, borderWidth:1, borderColor:"#ccc",width:"100%",borderRadius:5}}
      />
      </View>
      <TouchableOpacity style={styles.submit}><Text style={styles.sub} >Send to Diagnose</Text></TouchableOpacity>
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
    camera:{
        backgroundColor:"#fff",        
        width:"100%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        padding:15,
        justifyContent:"space-between"
    },
    left:{
        width:"48%",
        textAlign:"center"
    },
    submit:{
        backgroundColor:"#0d6efd",
        marginLeft:10,
        borderRadius:30,
        padding:10,
        paddingHorizontal:20,
        overflow:"hidden",  
        marginTop:10     
    },
    sub:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",       
    },
    image:{
        borderWidth:1,
        borderColor:"#ccc",
        height:150,
        borderRadius:5,
        marginTop:8
    },
})
export default PreviewDiagnose
