import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { products } from "../../../data/products";

const Home = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [keyword, setKeyword] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect(() => {
        if(selectedCategory && !keyword){
        const updatedSelectedProducts = products.filter((product) => 
        product?.category === selectedCategory)
        setSelectedProducts(updatedSelectedProducts)
    } else if (!keyword && !selectedCategory) {
        setSelectedProducts(products)
    } else if (selectedCategory && keyword){
        const updatedSelectedProducts = products.filter((product) => 
        product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()))
        setSelectedProducts(updatedSelectedProducts)
    } else if (!selectedCategory && keyword) {
        const updatedSelectedProducts = products.filter((product) => 
        product?.title?.toLowerCase().includes(keyword.toLowerCase()))
        setSelectedProducts(updatedSelectedProducts)
    }
    }, [selectedCategory, keyword])

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
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', {product})
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}></ProductHomeItem>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need"></Header>
                <FlatList showsVerticalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}></FlatList>
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 450}}></View>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default Home