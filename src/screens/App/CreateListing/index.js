import React from "react";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([])

    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
        const result = await launchImageLibrary()
        if(result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing"></Header>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <TouchableOpacity onPress={uploadNewImage}>
                    <Text>+</Text>
                </TouchableOpacity>
                {images?.map(image => (
                    <Image key={image?.fileName} style={styles.image} source={{uri: image?.uri}}></Image>
                ))}
            </View>
        </SafeAreaView>
    )
}
export default React.memo(CreateListing)