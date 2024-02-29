import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input"
import styles from "./styles";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import { useState } from "react";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"></AuthHeader>
            <Input label="Name" placeholder="John Doe"></Input>
            <Input label="Email" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="******"></Input>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign In"></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Already have an account
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default Signup