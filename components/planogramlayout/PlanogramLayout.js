import React, { Component } from "react";
import {
    StyleSheet,
    View
} from "react-native";
import DragAndDropContainer from "../shared/DragAndDropContainer.js";
import Product from "./Product.js";
import Shelf from "./Shelf.js";

class PlanogramLayout extends Component{

    constructor(props) {
        super(props);
        this.logProduct = this.logProduct.bind(this);
        this.state = {
            height: 72,
            dimHeight: 0,
            depth: 24,
            shelves: [
                {
                    height: 20,
                    dimHeight: 0,
                    products: []
                },
                {
                    height: 14,
                    dimHeight: 0,
                    products: []
                },
                {
                    height: 14,
                    dimHeight: 0,
                    products: []
                },
                {
                    height: 14,
                    dimHeight: 0,
                    products: []
                },
                {
                    height: 14,
                    dimHeight: 0,
                    products: []
                },
            ]
        };
    }

    componentDidMount() {

    }

    logProduct(product, shelf){
        console.log(product, shelf);
        let shelves = this.state.shelves;
        if(product.height > shelves[shelf.zone].height){
            console.log("no");
            return false;
        } else {
            let totalWidth = shelves[shelf.zone].products.reduce((tot, product)=> tot + (product.width * product.facings), 0);
            //MAKE THIS 48 A CONST VALUE LATER (length of shelf)
            if((totalWidth + (product.width * product.facings)) <= 48){
                shelves[shelf.zone].products.push(product);
                this.setState(Object.assign({}, this.state, {
                    shelves: shelves
                }))
                console.log(this.state.shelves);
                return true;
            } else {
                return false;
            }
        }
    }

    getDimensions(width, height){
        console.log("getDimensions", width, height);
        let shelves = this.state.shelves;
        shelves = shelves.map((shelf)=>{
            shelf.dimHeight = parseInt((shelf.height/this.state.height) * (height * .8));
            console.log("shelf.dimHeight", shelf.dimHeight);
            return shelf;
        });
        this.setState(Object.assign({}, this.state, {
            dimHeight: height,
            shelves: shelves
        }));
    }

    render(){
        console.log("HEIGHTS");
        return (
            <View style={styles.container} onLayout={(event) => this.getDimensions(event.nativeEvent.layout.width, event.nativeEvent.layout.height)}>
            <DragAndDropContainer dropCallback={this.logProduct} style={styles.shelfContainer} zones={this.state.shelves.map((shelf, inx) =>{
                console.log("SHELF.HEIGHT", shelf.height);
                console.log("STATE.HEIGHT", this.state.height);
                console.log("DIMHEIGHT", this.state.dimHeight);
                console.log(shelf.dimHeight);
                return <Shelf shelf={shelf} height={shelf.dimHeight} key={inx} inx={inx} products={shelf.products} style={styles.shelf}></Shelf>})}>
                <Product height={15} width={6} facings={1} productName={"goodProduct"}></Product>
                <Product height={17} width={10} facings={1} productName={"badProduct"}></Product>
                <Product height={10} width={8} facings={2} productName={"badProduct1"}></Product>
                <Product height={8} width={5} facings={1} productName={"badProduct2"}></Product>
                <Product height={10} width={4} facings={1} productName={"badProduct3"}></Product>
                <Product height={12} width={5} facings={2} productName={"badProduct4"}></Product>
                <Product height={10} width={10} facings={1} productName={"badProduct5"}></Product>
                <Product height={10} width={10} facings={3} productName={"badProduct6"}></Product>
            </DragAndDropContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    shelfContainer: {
        marginTop: 10,
        width: "90%",
    }
});

export default PlanogramLayout;
