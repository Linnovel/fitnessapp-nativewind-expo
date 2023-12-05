import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React from "react";

const otdImage = require("../../assets/workout.jpg");

export default function WorkoutOTD() {
    return (
        <TouchableOpacity className="items-center justify-center">
            <View className="rounded-3xl overflow-hidden h-40 w-[80%]">
                <ImageBackground
                    source={otdImage}
                    className="flex-1 justify-center items-center"
                    resizeMode="cover"
                >
                    <View>
                        <Text className="text-white text-3xl tracking-tight">
                            Workout Of the Day
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
