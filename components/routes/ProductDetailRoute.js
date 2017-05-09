import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet
} from "react-native";
import ProductDetail from "../productdetail/ProductDetail.js";

export default class ProductDetailRoute extends Component {
    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
                <ProductDetail/>
               </LinearGradient>
    }
}

const styles = StyleSheet.create({

});
