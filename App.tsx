import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {

    const oi = () => {
        console.log("oi")
    }

    return (
        <View style = {style.container}>
            <TouchableOpacity onPress={oi}>
                <Text>
                    Click me!
                </Text>
            </TouchableOpacity>
        </View>
        )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3EDF8'
    }
})

export default App