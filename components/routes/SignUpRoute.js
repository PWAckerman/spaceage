import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
} from "react-native";
import SignUpLayout from "../signup/SignUpLayout.js";

export default class SignUpRoute extends Component {
    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
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
