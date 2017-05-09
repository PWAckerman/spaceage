import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

const Products = ({productCount}) => (
    <TouchableOpacity activeOpacity={0.2} style={styles.productsContainer}>
        <Text style={{fontSize: 15, lineHeight: 40, color: "#ecf2c9"}}>PRODUCTS</Text>
        <Text style={styles.productCount}>{productCount}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    productsContainer: {
        height: 100,
        alignSelf: "stretch",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        marginLeft: 5
    },
    productCount: {
        alignSelf: "stretch",
        alignItems: "center",
        fontSize: 45,
        color: "#ecf2c9",
        justifyContent: "center",
        textAlign: "center",
    }
});

export default Products;
