import React, {Component} from "react";
import { BlurView } from "react-native-blur";
import {
    StyleSheet,
    Image,
    KeyboardAvoidingView,
} from "react-native";
import InputWithIcon from "../shared/InputWithIcon.js";


const SignUpLayout = ({prop1}, context) => {
    return <KeyboardAvoidingView behavior={"padding"} style={styles.childChild}>
            <Image style={styles.welcome} source={require("../../img/spaceage.png")}></Image>
            <BlurView blurType="dark" blurAmount={10} style={styles.inputContainer}>
                <InputWithIcon color="rgb(255, 255, 255)"
                                iconName="user-circle"
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                size={20}
                                placeholder="E-Mail"
                                secureTextEntry={false}
                                callback={(str)=>{console.log(str)}}/>
                <InputWithIcon color="rgb(255, 255, 255)"
                                iconName="key"
                                size={20}
                                placeholder="Password"
                                secureTextEntry={true}
                                callback={(str)=>{console.log(str)}}/>
                <InputWithIcon color="rgb(255, 255, 255)"
                                iconName="key"
                                returnKeyType={"done"}
                                size={20}
                                placeholder="Confirm"
                                secureTextEntry={true}
                                callback={(str)=>{console.log(str)}}/>
            </BlurView>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 5,
        borderColor: "rgb(255, 255, 255)"
    },
    childContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#022349"
    },
    childChild: {
        flex: 1,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    dropZone    : {
        height  : 100,
        backgroundColor:"#2c3e50"
    },
    welcome: {
        margin: 10,
        width: "100%",
        height: 200,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    username: {
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 1,
        borderRadius: 0,
        marginBottom: 0,
        height: 40,
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgb(255, 255, 255)"
    },
    password: {
        marginBottom: 5,
        width: "100%",
        height: "10%",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgb(255, 255, 255)"
    },
    button: {
        width: "50%",
        backgroundColor: "#022349",
        borderWidth: 0,
        borderRadius: 5,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "rgb(255, 255, 255)",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default SignUpLayout;
