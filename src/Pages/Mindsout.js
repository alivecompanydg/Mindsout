
import React, { useEffect, Component } from "react"

import { View, Text, StyleSheet, AsyncStorage, Button } from "react-native"

import * as Speech from "expo-speech"

export default class Mindsout extends Component{

     async speak() {
        const txtSpeak = "Olá, meu nome é "
        const name = await AsyncStorage.getItem("asName").then(Name => {
            if(Name){
                return Name
            }
        })
        
        try{
            Speech.speak(txtSpeak + name + ", e sou seu assistente desenvolvido pela Alive Company", {
                language: "pt",
                pitch: 1,
                rate: 1,
                near: false
            }).then(() => {
                console.log("Yeah")
            }).catch((err) => {
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Button 
                style={styles.button}
                title="Aperte"
                onPress={this.speak}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8
    },
    button: {
        backgroundColor: '#ecf0f1',
        width:200,
        height:200
    }
  })