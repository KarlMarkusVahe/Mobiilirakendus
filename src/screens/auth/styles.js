import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center'
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline',
    },
    titleContainer: {
        marginVertical: 54
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
})