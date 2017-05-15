import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import BackButton from './BackButton.js';

const Header = ({config, children, back}) => {
    console.log("HEADER", config);
    return (
        <View style={styles.header}>
            {children}
            <Text style={styles.headerText}>{config.name ? config.name.toUpperCase() : null}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        zIndex: 50
    },
    headerText: {
        width: "100%",
        height: 20,
        textAlign: "center",
        color: "rgb(255, 255, 255)"
    },
    backButton: {
        backgroundColor: "transparent",
        position: "absolute",
        color: "rgb(255, 255, 255)",
        left: 10,
        top: 15,
        width: 30
    }
});

export default Header;
