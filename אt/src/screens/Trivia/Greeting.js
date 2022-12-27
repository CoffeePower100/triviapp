import React, {useEffect, useCallback, useState} from 'react'
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Style from '../../utilis/AppStyle';

const start_trivia_func = () => {


    navigation.navigate('questions');
}

const Greeting = () => {
    return(
        <View style={Style.container}>
            <ImageBackground style = {Style.screen_background} source = {require("../../utilis/trivia_images/splash_logo.png")} resizeMode = "cover">
                <TouchableOpacity style = {Style.greeting_button} onPress= {start_trivia_func}>
                    <Text>Play</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export const greetingScreenOptions = (navData) => {
    return {
        headerShown: false
    }
}

export default Greeting;