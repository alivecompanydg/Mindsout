import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Login() {
    return(
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

    <Text style={styles.welcome}>BEM-VINDO</Text>
    
    <View style={styles.form}>

      <Text style={styles.labelUser}>QUAL O SEU NOME?</Text>
      <TextInput 
        style={styles.inputUser}
        placeholder="Digite seu nome"
        placeholderTextColor="#000"
      />

      <Text style={styles.labelAssistent}>QUAL NOME VOCÊ GOSTARIA DE ME DAR?</Text>
      <TextInput 
        style={styles.inputAssistent}
        placeholder="Digite o nome"
        placeholderTextColor="#000" 
      />

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
    )
}

const styles = new StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#24B9A3',
        alignItems: 'center',
        justifyContent: 'center',
      },

      labelUser:{
          fontWeight:"bold",
          color:"#fff",
          fontSize:16
      },

      inputUser:{
          borderBottomWidth:1,
          marginBottom:20,
          borderColor:"#ddd",
          width:295,
          fontSize:15,
          height:40
      },

      labelAssistent:{
          fontWeight:"bold",
          color: "#fff",
          fontSize:16,
          display:"flex"
      },

      inputAssistent:{
          borderBottomWidth:1,
          marginBottom:20,
          borderColor:"#ddd",
          width:295,
          fontSize:15,
          height:40,
          display:"flex"
      },

      form:{
          paddingHorizontal:11,
          justifyContent:"center",
          display:"flex"
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
          borderRadius:4
      },

      welcome: {
          fontWeight:"bold",
          fontSize:35,
          alignSelf:"center",
          paddingVertical:40,
          color: "#fff"
      }
})