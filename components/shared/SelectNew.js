import React, { Component } from "react";
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity
} from "react-native";

function log(){
    console.log("PRESS OUT ICON");
}

const SelectNew = ({coords}) => (
    <View style={{
        alignItems: "stretch",
        height: 70,
        position: "absolute",
        top: coords.y,
        left: coords.x,
    }}>
        <TouchableOpacity onPressOut={log} style={styles.button}>
            <Image style={styles.buttonIcon} source={require("../../img/folder.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPressOut={log} style={styles.button}>
            <Image style={styles.buttonIcon} source={require("../../img/gridicon.png")}/>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    selectNewContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        width: 150
    },
    button: {
        width: 50,
        height: 50,
        marginTop: 2,
        marginBottom: 2,
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 25
    },
    buttonIcon: {
        width: 30,
        height: 30
    },
    planoIcon: {
        width: 40,
        height: 40
    }
});

export default SelectNew;
