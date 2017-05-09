import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

const ProductDetail = ({name}) => (
    <View style={styles.productDetailContainer}>
        <Text>Product Detail</Text>
    </View>
);

const styles = StyleSheet.create({
    flexWrapper: {
        alignItems: "flex-start"
    },
    productDetailContainer: {
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: "100%",
        marginTop: 40,
        marginBottom: 5
    }
});

export default ProductDetail;
