
import React, { Component } from "react"

import { View, Text, AsyncStorage, Button } from "react-native"
import Speech from "expo-speech"

export default class Mindsout extends Component{

    state = {
        txtSpeak: "Ola, meu nome e "
    }

     onSpeak = () => {
        const name = AsyncStorage.getItem("asName")
        Speech.speak(this.state.txtSpeak + name, {
            language: "en",
            pitch: 1,
            rate: 1
        })
    }

    render() {
        return(
            <View style={{paddingTop:100}}>
                <Button 
                title="Aperte"
                onPress={this.onSpeak}
                />
            </View>
        )
    }
}