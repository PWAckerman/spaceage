import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

const Shelves = ({shelfCount}) => (
    <TouchableOpacity activeOpacity={0.2} style={styles.shelvesContainer}>
        <Text style={{fontSize: 15, lineHeight: 40, color: "#ecf2c9"}}>SHELVES</Text>
        <Text style={styles.shelfCount}>{shelfCount}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    shelvesContainer: {
        height: 100,
        alignSelf: "stretch",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        marginLeft: 5
    },
    shelfCount: {
        width: 50,
        alignSelf: "center",
        alignItems: "center",
        fontSize: 45,
        color: "#ecf2c9",
        justifyContent: "center",
        textAlign: "center",
    }
});

export default Shelves;
