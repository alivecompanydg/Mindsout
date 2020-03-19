
import React, { Component } from "react"

import { View, Text, AsyncStorage, Button } from "react-native"

import * as Speech from "expo-speech"

export default class Mindsout extends Component{

    state = {
        txtSpeak: "Ola, meu nome e "
    }

     speak() {
        const name = AsyncStorage.getItem("asName")
        Speech.speak(this.state.txtSpeak + name, {
            language: "en",
            pitch: 1,
            rate: 1
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Button 
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
      backgroundColor: '#ecf0f1',
      padding: 8
    }
  })