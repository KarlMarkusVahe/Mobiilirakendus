import React, {useEffect} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from "react-native";
import Signup from './src/screens/auth/SignUp'
import Config from "react-native-config";
import Signin from './src/screens/auth/signIn';
import Home from './src/screens/Home';

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID
        })
    }, [])
    return (
        <SafeAreaView>
            <Home></Home>
        </SafeAreaView>
    );
};

export default React.memo(App)