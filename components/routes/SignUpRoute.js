import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "../shared/ErrorComponent.js";
import {
    StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import SignUpLayout from "../signup/SignUpLayout.js";

export default class SignUpRoute extends Component {
    render() {
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                    <SignUpLayout/>
                </LinearGradient>
    }
}

const styles = StyleSheet.create({
    childContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});
