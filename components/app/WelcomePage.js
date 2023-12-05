import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import AppText from '../styles/AppText';


export default function WelcomePage() {

    const [fontsLoaded] = useFonts({
        'Kameron': require('../../assets/fonts/Kameron-Bold.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Text style={{ fontSize: 27, fontFamily: 'Kameron', textAlign: 'center', color: '#92400e' }}>WelcomePage</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})