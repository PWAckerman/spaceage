import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import { Redirect } from "react-router";
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image} from "react-native";
import { BlurView } from "react-native-blur";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions.js";

class App extends Component{

    constructor(props, context){
        super(props, context);
        this.onClick = this.onClick.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.state= {
            loggedIn: false,
            userName: "",
            password: ""
        };
    }

    onPasswordChange(evt){
        this.setState({
            password: evt.nativeEvent.text
        });
    }

    onUserNameChange(evt){
        this.setState({
            userName: evt.nativeEvent.text
        });
    }

    onClick(){
        this.props.login(this.state);
    }

    render(){
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
                <KeyboardAvoidingView behavior={"padding"} style={styles.childChild}>
                <Image style={styles.welcome} source={require("../img/spaceage.png")}></Image>
                <BlurView blurType="dark" blurAmount={10} style={styles.inputContainer}>
                    <TextInput
                        style={styles.username}
                        autoCapitalize={"none"}
                        placeholder={"Username"}
                        keyboardType={"email-address"}
                        autoCorrect={false}
                        placeholderTextColor="rgb(161, 161, 161)"
                        returnKeyType={"next"}
                        keyboardAppearance={"dark"}
                        clearTextOnFocus={true}
                        onChange={(evt)=> this.onUserNameChange(evt)}/>
                    <TextInput
                        style={styles.username}
                        secureTextEntry={true}
                        placeholder={"Password"}
                        returnKeyType={"done"}
                        keyboardAppearance={"dark"}
                        placeholderTextColor="rgb(161, 161, 161)"
                        clearTextOnFocus={true}
                        onChange={(evt)=> this.onPasswordChange(evt)}/>
                </BlurView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onClick}
                    accessibilityLabel="Sign In"
                    title="Sign In">
                        <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
                {this.state.loggedIn ? <Redirect to="/dash"/> : null}
            </LinearGradient>;
    }
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

export default connect(
    (state)=>({
        token: state.user.token
    }),
    (dispatch)=>({
        login: ({userName, password})=> {
            dispatch(loginUser(dispatch, { username: userName, password: password }));
        }
    }))(App);
