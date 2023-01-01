import React, {useEffect, useCallback, useState} from 'react'
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Style from '../../utilis/AppStyle';

const Greeting = ({navigation}) => { 
    return(
        <View style={Style.container}>
            <ImageBackground style = {Style.greeting_background} source = {require("../../utilis/trivia_images/splash_logo.png")}>
            </ImageBackground>
            <TouchableOpacity style = {Style.greeting_button} onPress= {() => {navigation.navigate('questions');}}>
                    <Text>Play</Text>
            </TouchableOpacity>
        </View>
    )
}

export const greetingScreenOptions = (navData) => {
    return {
        headerShown: false
    }
}

export default Greeting;