import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500'
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})