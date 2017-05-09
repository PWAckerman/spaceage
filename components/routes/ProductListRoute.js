import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet
} from "react-native";
import ProductList from "../productlist/ProductList.js";

export default class ProductListRoute extends Component {
    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
                <ProductList/>
               </LinearGradient>
    }
}

const styles = StyleSheet.create({

});
