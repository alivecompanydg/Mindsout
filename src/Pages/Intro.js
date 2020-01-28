import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "../img/logo.jpg"


export default function Intro() {
    return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})