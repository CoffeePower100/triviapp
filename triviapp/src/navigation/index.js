//IMPORT NAVIGATION LIBS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS
import Greeting from '../screens/Trivia/Greeting';
import QuestionsPart from '../screens/Trivia/QuestionsPart';
import Results from '../screens/Trivia/Results';

//CREATE STACK
const TriviaStackNavigator = createNativeStackNavigator();
export const TriviaStack = () => {
    return(
        <TriviaStackNavigator.Navigator>
            <TriviaStackNavigator.Screen name = 'greeting' component = {Greeting} />
            <TriviaStackNavigator.Screen name = 'questions' component = {QuestionsPart} />
            <TriviaStackNavigator.Screen name = 'results' component = {Results} />
        </TriviaStackNavigator.Navigator>
    )
}