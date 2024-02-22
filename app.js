import React from "react";
import { SafeAreaView } from "react-native";
import Splash from './src/screens/auth/Splash'
import Signup from './src/screens/auth/SignUp'

const App = () => {
    return (
        <SafeAreaView>
            <Signup></Signup>
        </SafeAreaView>
    );
};

export default App