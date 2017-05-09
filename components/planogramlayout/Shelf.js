import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import ShelfProduct from "./ShelfProduct.js";

class Shelf extends Component{

    constructor(props, context){
        super(props, context);
        console.log("building a shelf");
        console.log(this.props);
        this.state = {
            height: this.props.height,
            products: this.props.products
        }
    }

    componentWillReceiveProps(){
        console.log("shelf updated");
        console.log(this.props);
        this.setState(Object.assign({}, this.state, {
            height: this.props.height,
            products: this.props.products
        }))
        console.log(this.state);
        this.getShelfStyle = this.getShelfStyle.bind(this);
        return true;
    }

    getShelfStyle(){
        return {
            width: "100%",
            height: this.props.shelf.dimHeight,
            alignItems: "flex-start",
            flexDirection: "row",
            backgroundColor: "rgb(145, 39, 144)"
        }
    }

    getProductStyle(product){
        let height = parseInt(((product.height / this.props.shelf.height) * this.props.shelf.dimHeight));
        return {
            width: (1/product.facings * 100) + "%",
            height: height,
            marginTop:  this.props.shelf.dimHeight - height,
            backgroundColor: "rgb(255, 139, 0)"
        }
    }

    render(){
        console.log("render shelf");
        console.log(this.getShelfStyle());
        return (
                <View style={this.getShelfStyle()}>
                    <Text style={styles.shelfTitle}>{`Shelf ${this.props.inx}`}</Text>
                    {this.state.products.map((product, inx)=>{
                        return <ShelfProduct key={inx} containerWidth={(((product.width / 48) * 100) * product.facings)} product={product} style={this.getProductStyle(product)}></ShelfProduct>;
                    })}
                </View>
        );
    }
}

const styles = StyleSheet.create({
    shelf: {
        width: "100%",
        height: 100,
        alignItems: "flex-start",
        flexDirection: "row",
        backgroundColor: "rgb(145, 39, 144)"
    },
    shelfTitle: {
        position: "absolute",
        top: 0,
        left: 0
    }
});

export default Shelf;
