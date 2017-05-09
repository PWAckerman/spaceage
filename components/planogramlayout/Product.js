import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

const Product = ({productName, height})=>{
    return (
        <View style={styles.productContainer}>
            <Text>{productName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        width: 100,
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "rgb(18, 163, 128)",
        zIndex: 500
    }
});

export default Product;
