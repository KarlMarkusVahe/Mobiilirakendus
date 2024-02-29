import React, {useEffect} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView, Image } from "react-native";
import Signup from './src/screens/auth/SignUp'
import Splash from './src/screens/auth/Splash';
import Config from "react-native-config";
import Signin from './src/screens/auth/signIn';
import Home from './src/screens/App/Home'
import Favorites from './src/screens/App/Favorites'
import ProductDetails from './src/screens/App/ProductDetails'
import { colors } from "./src/utils/colors";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let icon;

                if (route.name === 'Home') {
                    icon = focused
                        ? require('./src/assets/tabs/HomeActive.png')
                        : require('./src/assets/tabs/Home.png')
                } else if (route.name === 'Favorites') {
                    icon = focused
                        ? require('./src/assets/tabs/FavoActive.png')
                        : require('./src/assets/tabs/Favo.png')
                }

                return <Image style={{width: 24, height: 24}} source={icon}></Image>
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {borderTopColor: colors.lightGray}
        })}>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Favorites" component={Favorites}></Tab.Screen>
        </Tab.Navigator>
    );
}

const App = () => {
    const isSignedIn = true

    useEffect(() => {
        GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID
        })
    }, [])

    const theme = {
        colors: {
            background: colors.white
        }
    }

    return (
        <SafeAreaProvider>
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
            {
                    isSignedIn ? (
                        <>
                            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}></Stack.Screen>
                            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}></Stack.Screen>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
                        </>
                    )
            }
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default React.memo(App)