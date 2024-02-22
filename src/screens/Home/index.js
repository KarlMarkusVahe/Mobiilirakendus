import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../components/Header";

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Header showSearch={true} title="Find All You Need"></Header>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home