import React from "react";
import { View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";
import { styles } from "./styles";

const Favorites = ({navigation}) => {
    const renderItem = ({item}) => {

        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item})
        }

        return (
            <FavoriteItem onPress={onProductPress} {...item}></FavoriteItem>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites"></Header>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites)