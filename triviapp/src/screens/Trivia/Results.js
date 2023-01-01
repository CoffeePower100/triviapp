import React, {useEffect, useCallback, useState} from 'react'
import { View, Text, Button} from 'react-native';
import Style from '../../utilis/AppStyle';

/*
const getDataFromAsync = useCallback(async () => {
    const dataFromAsync = await AsyncStorage.getItem('Account');
    if (dataFromAsync != null) {
      const data = JSON.parse(dataFromAsync);
      setToken(data.token);
      setIsLogin(true);
    }
  }, [setToken])

  useEffect(() => {
    getDataFromAsync();
  }, [getDataFromAsync])
*/

const Results = (props) => {

    return(
        <View style={Style.container}>
            <Text>Results</Text>
        </View>
    )
}

export default Results;