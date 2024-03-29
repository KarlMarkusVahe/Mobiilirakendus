import React from "react";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { categories } from "../../../data/categories";

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({})

    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary()
        if(result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false)
        }
    }

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter((img) => img?.fileName !== image?.fileName)
            return filteredImages
        }) 
    }

    const onChange = (value, key) => {
        setValues((val) => ({...val, [key]: value}))
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView behavior="position">
            <Header showBack={true} onBackPress={goBack} title="Create a new listing"></Header>
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <View style={styles.imageRow}>
                <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                    <View style={styles.uploadCircle}>
                        <Text style={styles.uploadPlus}>+</Text>
                    </View>
                </TouchableOpacity>
                {images?.map(image => (
                <View key={image?.fileName} style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: image?.uri}}></Image>
                    <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                        <Image style={styles.delete} source={require('../../../assets/Close.png')}></Image>
                    </Pressable>
                </View>
                ))}
                {loading ? (<ActivityIndicator />) : null}
                </View>
                <Input label="Title" placeholder="Listing title" value={values.title} onChangeText={(v) => onChange(v, 'title')}></Input>
                <Input label="Category" placeholder="Select the category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories}></Input>
                <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric"></Input>
                <Input style={styles.textArea} label="Description" placeholder="Tell us more..." value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline></Input>
                <Button title="Submit"></Button>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default React.memo(CreateListing)