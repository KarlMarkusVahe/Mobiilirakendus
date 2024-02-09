import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input"
import styles from "./styles";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"></AuthHeader>
            <Input label="Name" placeholder="John Doe"></Input>
            <Input label="Email" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="******"></Input>
        </View>
    )
}
export default Signup