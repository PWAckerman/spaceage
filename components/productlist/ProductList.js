import React, {Component} from "react";
import { Link } from "react-router-native";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

function onPress(){
    console.log("Pressed!");
}

const ProductList = ({name}) => (
    <View style={styles.productListContainer}>
        <Link to="/dash">
        <TouchableOpacity onPress={onPress}>
            <Text>Product List</Text>
        </TouchableOpacity>
        </Link>
    </View>
)

const styles = StyleSheet.create({
    flexWrapper: {
        alignItems: "flex-start"
    },
    productListContainer: {
        flexDirection: "column",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: "100%",
        marginTop: 40,
        marginBottom: 5
    }
});

export default ProductList;
