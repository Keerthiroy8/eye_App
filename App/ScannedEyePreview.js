import React from 'react'
import { View ,Text, StyleSheet,TouchableOpacity} from 'react-native'

function ScannedEyePreview({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.scann}>Scanned Eye Preview</Text>
      <View style={styles.camera}></View>
      <TouchableOpacity style={styles.submit}><Text style={styles.sub} onPress={() => navigation.navigate('Preview Diagnose')}>Send to Diagnose</Text></TouchableOpacity>
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
        height:200,
        width:"100%",
        marginBottom:15,
        borderRadius:10
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
})
export default ScannedEyePreview
