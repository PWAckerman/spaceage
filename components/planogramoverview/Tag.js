import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import GenericBouncer from "../shared/GenericBouncer.js";

const Tag = ({tag}) => (
    <GenericBouncer style={{}}>
    <TouchableOpacity activeOpacity={0.2} style={styles.tagContainer}>
        <Text style={{lineHeight: 50, color: "#022349"}}>{tag}</Text>
    </TouchableOpacity>
    </GenericBouncer>
);

const styles = StyleSheet.create({
    tagContainer: {
        height: 50,
        alignSelf: "stretch",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "rgb(236, 242, 201)",
        marginRight: 5,
        marginLeft: 5
    },
});

export default Tag;
