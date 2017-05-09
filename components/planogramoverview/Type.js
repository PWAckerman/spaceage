import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from "react-native";

const Type = ({type}) => (
    <TouchableOpacity activeOpacity={0.2} style={styles.typeContainer}>
        <Text style={{fontSize: 15, lineHeight: 40, color: "#ecf2c9"}}>TYPE</Text>
        <Image style={styles.typeIcon} source={require("../../img/shelf.png")}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    typeContainer: {
        height: 100,
        alignSelf: "stretch",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        marginLeft: 5
    },
    typeIcon: {
        width: 45,
        height: 45
    }
});

export default Type;
