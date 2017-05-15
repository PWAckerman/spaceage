import React, {Component} from "react";
import { withRouter} from "react-router-native";
import NavLink from "./NavLink.js";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const ErrorComponent = ({error, callback}, context) => {
    console.log('context', context);
    return (<TouchableOpacity style={styles.errorContainer} onPress={callback}>
            <Text style={styles.errorMessage}>{error.description || "Unknown Error"}</Text>
        </TouchableOpacity>)
}



const styles = StyleSheet.create({
    errorContainer: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
        position: "absolute",
        height: "10%",
        top: 0,
        width: "100%",
        backgroundColor: "#a80505",
        zIndex: 0
    },
    errorMessage: {
        color: "rgb(255, 255, 255)"
    }
});

export default ErrorComponent;
