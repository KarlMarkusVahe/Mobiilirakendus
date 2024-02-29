import React, {useEffect} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from "react-native";
import Signup from './src/screens/auth/SignUp'
import Splash from './src/screens/auth/Splash';
import Config from "react-native-config";
import Signin from './src/screens/auth/signIn';
import Home from './src/screens/Home';
import { colors } from "./src/utils/colors";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID
        })
    }, [])

    const Stack = createNativeStackNavigator();

    const theme = {
        colors: {
            background: colors.white
        }
    }

    return (
        <SafeAreaProvider>
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default React.memo(App)