import React, {Component} from "react";
import { withRouter} from "react-router-native";
import NavLink from "./NavLink.js";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

const DashNav = ({mode}) => (
    <View style={styles.dashNavContainer} >
        <NavLink to="/dash">
            <Text style={{color: "rgb(255, 255, 255)"}}>DASH</Text>
        </NavLink>
        <NavLink to="/signup">
            <Text style={{color: "rgb(255, 255, 255)"}}>SIGNUP</Text>
        </NavLink>
    </View>
)

const styles = StyleSheet.create({
    dashNavContainer: {
        width: "100%",
        backgroundColor: "#022349",
        zIndex: 0
    }
});

export default withRouter(DashNav);
