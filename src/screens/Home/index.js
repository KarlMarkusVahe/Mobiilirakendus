import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import { categories } from "../../data/categories";
import CategoryBox from "../../components/CategoryBox";
import ProductHomeItem from "../../components/ProductHomeItem";
import { products } from "../../data/products";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect(() => {
        if(selectedCategory){
        const updatedSelectedProducts = products.filter((product) => 
        product?.category === selectedCategory)
        setSelectedProducts(updatedSelectedProducts)
    } else {
        setSelectedProducts(products)
    }
    }, [selectedCategory])

    const renderCategoryItem = ({item}) => {
        return(
            <CategoryBox
            onPress={() => setSelectedCategory(item?.id)}
            isSelected={item.id === selectedCategory}
            title={item?.title} 
            image={item?.image}></CategoryBox>
        )
    }

    const renderProductItem = ({item}) => {
        console.log('item => ', item)
        return (
            <ProductHomeItem {...item}></ProductHomeItem>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need"></Header>
                <FlatList showsVerticalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}></FlatList>
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 450}}></View>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default Home