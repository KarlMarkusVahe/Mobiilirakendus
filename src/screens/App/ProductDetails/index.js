import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from '../../../components/Button'
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images}></ImageCarousel>
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}></Image>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')}></Image>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/Favo.png')}></Image>
                </Pressable>
                <Button title="Contact Seller"></Button>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(ProductDetails)