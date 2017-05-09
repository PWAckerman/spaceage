import React, {Component} from "react";
import {
    StyleSheet,
    View
} from "react-native";
import DashNav from "./DashNav.js";

const NavBar = ({mode = "dash"}) => (
    <View style={styles.navBarContainer}>
        {mode === "dash" ? <DashNav /> : null}
    </View>
)

const styles = StyleSheet.create({
    navBarContainer: {
        position: "absolute",
        height: "10%",
        bottom: 0,
        width: "100%",
        backgroundColor: "#022349",
        zIndex: 0
    }
});

export default NavBar;
