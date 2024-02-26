import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";


const CategoryBox = ({title, image, onPress, isSelected}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black} : {}]}>
                <Image style={styles.image} source={{uri: image}}></Image>
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>
        </Pressable>
    )
}
export default CategoryBox