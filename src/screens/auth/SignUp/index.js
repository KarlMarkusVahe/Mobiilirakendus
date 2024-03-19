import { Alert, Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input"
import styles from "./styles";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import { useContext, useState } from "react";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { UserContext } from "../../../../App";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(UserContext)

    const onBack = () => {
        navigation.goBack()
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = () => {
        if(!values?.fullName || !values?.email || !values?.password){
            Alert.alert('All fields are required')
            return
        }
        if(!checked){
            Alert.alert('Please consent')
            return
        }
        axios.post('http://192.168.17.234/api/user/register', values)
        .then(response => {
            console.log(response)
            const {email, password} = values
            axios.post('http://192.168.17.234/api/user/login', values)
            .then(response => {
                console.log(response)
                const accessToken = response?.data?.accessToken
                console.log(accessToken)
                setUser({accessToken})
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"></AuthHeader>
            <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} label="Name" placeholder="John Doe"></Input>
            <Input value={values.email} onChangeText={(v) => onChange('email', v)} label="Email" placeholder="example@gmail.com"></Input>
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="******"></Input>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button onPress={onSubmit} style={styles.button} title="Sign Up"></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Already have an account
                <Text onPress={onSignin} style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default Signup