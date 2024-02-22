import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input"
import styles from "./styles";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { useState } from "react";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"></AuthHeader>
            <Input label="Name" placeholder="John Doe"></Input>
            <Input label="Email" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="******"></Input>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign In"></Button>
        </View>
    )
}
export default Signup