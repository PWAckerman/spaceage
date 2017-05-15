import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "../shared/ErrorComponent.js";
import {
    StyleSheet
} from "react-native";
import { connect } from "react-redux";
import ProductList from "../productlist/ProductList.js";

class ProductListRoute extends Component {
    render() {
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                <ProductList/>
                { this.props.error ? <ErrorComponent error={this.state.error}/> : null}
               </LinearGradient>
    }
}

const styles = StyleSheet.create({

});

export default connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        //dispatch actions here
    }))(ProductListRoute);
