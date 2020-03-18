import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Mic from "../img/mic.png"


export default function Intro({ navigation }) {

  async function handleSubmit() {
    navigation.navigate("Mindsout")
  }

    return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.Case}>CASE: Mindsout</Text>
      <Text style={styles.textExp}>Como usar?</Text>

      <Image source={Mic} style={styles.mic}/>

      <Text style={styles.text}>Mindsout esta te escutando!</Text>
      <Text style={styles.text}>basta chamar pelo nome que você</Text>
      <Text style={styles.text}>o batizou e ele lhe atenderá</Text>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entendi</Text>
      </TouchableOpacity>

    </SafeAreaView>
    )
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#24B9A3"
      },

      Case: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 30
      },

      buttonText:{
        fontSize:16,
        fontWeight:"bold",
        alignSelf:"center",
        color: "#fff"
      },

      button: {
          alignItems:"center",
          height:40,
          width:295,
          borderWidth:1,
          borderColor:"#999",
          backgroundColor:"#f05a5b",
          justifyContent:"center",
          borderRadius:4,
          marginTop: 31,
      },

      textExp: {
        color: "#ffffff",
        fontSize: 20,
        marginTop: 13,
        marginBottom: 13,
        alignSelf: "center"
      },

      text: {
        color: "#ffffff",
        fontSize: 20,
        alignSelf: "center"
      },

      mic: {
        alignSelf: "center",
        width: 85,
        height: 140,
        marginTop: 18,
        marginBottom: 31,
      }
})