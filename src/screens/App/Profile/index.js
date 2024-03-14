import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

const Profile = ({navigation}) => {
    num = 10

    const onLogout = () => {

    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                <Header title="Profile" showLogout={onLogout}></Header>
                <Text style={styles.name}>User Name</Text>
                <Text style={styles.email}>User Email</Text>

                <ListItem title="My Listings" subtitle={`Already have ${num} listings`}></ListItem>
                <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress}></ListItem>
                </View>
                <Button title="Add new Listing"></Button>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Profile)