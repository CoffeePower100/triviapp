import { StyleSheet } from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
    greeting_container: {
        flex:1, backgroundColor:Colors.bg,
        padding:30
    },
    greeting_button: {
        paddingVertical:15,
        borderRadius:12,
        backgroundColor: Colors.yellow,
        marginTop:20
    },
    container: {
        flex:1, backgroundColor:Colors.bg,
        padding:30
    },
    screen_background: {
        flex: 1
    }
})