import { Text } from 'react-native'
import React from 'react'
import {
    useFonts,
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
} from '@expo-google-fonts/caveat';

export default function AppText({ children }) {
    let [fontsLoaded] = useFonts({
        Caveat_400Regular,
        Caveat_500Medium,
        Caveat_600SemiBold,
        Caveat_700Bold,
    });
    return (

        <Text style={{ fontSize: 27, fontFamily: 'Kameron-Bold', textAlign: 'center', color: '#92400e' }}>{children}</Text>

    )
}

