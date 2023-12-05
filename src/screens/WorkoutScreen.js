import React from 'react'
import WelcomePage from '../../components/app/WelcomePage'
import { SafeAreaView } from 'react-native-safe-area-context'
import WorkoutOTD from '../../components/app/WorkoutOTD'

export default function WorkoutScreen() {
    return (
        <SafeAreaView className="mx-[1%]" >
            <WelcomePage />
            <WorkoutOTD />
        </SafeAreaView>
    )
}

