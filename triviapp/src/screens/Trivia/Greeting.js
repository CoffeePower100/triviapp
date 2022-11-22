import React, {useEffect, useCallback, useState} from 'react'
import { View, Text, Button} from 'react-native';
import Style from '../../utilis/AppStyle';

const Greeting = () => {

    return(
        <View style={Style.container}>
            <Text>Greeting</Text>
        </View>
    )
}

export default Greeting;