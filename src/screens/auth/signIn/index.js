import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input"
import styles from "./styles";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import { useState } from "react";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign in"></AuthHeader>
            <Input label="Email" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="******"></Input>
            <Button style={styles.button} title="Sign In"></Button>
            <Separator text="Or sign in with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    )
}
export default Signin