import React, { Component } from "react";
import {
    Text,
    View
} from "react-native";

class ShelfProduct extends Component{
    constructor(props, context){
        super(props, context);
    }

    getContainerStyle(){
        return {
            height: "100%",
            width: (this.props.containerWidth + 0.1) + "%",
            flexWrap: "nowrap",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flexDirection:"row"
        }
    }

    render(){
        let facings = [];
        for(var i = 0; i < this.props.product.facings; i++){
            facings.push(<Text key={i} style={this.props.style}>{this.props.product.productName} Product <Text>{this.props.product.height}</Text></Text>);
        }
        return (
            <View style={this.getContainerStyle()}>{facings}</View>
        );
    }
}

export default ShelfProduct;
