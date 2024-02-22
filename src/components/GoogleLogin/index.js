import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleLogin = () => {
    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo => ', userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {

            } else if (error.code === statusCodes.IN_PROGRESS) {

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {

            }
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={signin} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')}></Image>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin)