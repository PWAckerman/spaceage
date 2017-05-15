import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "./shared/ErrorComponent.js";
import { Redirect } from "react-router";
import InputWithIcon from './shared/InputWithIcon.js';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image} from "react-native";
import { BlurView } from "react-native-blur";
import { connect } from "react-redux";
import { loginUser, removeUserError, getUser } from "../actions/userActions.js";

class App extends Component{

    constructor(props, context){
        super(props, context);
        this.onClick = this.onClick.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.state= {
            loggedIn: false,
            userName: "",
            password: "",
            disabled: true,
            style: styles.disabledButton
        };
    }

    componentDidUpdate(){
        this.props.token ? this.props.loadUser() : null;
    }

    shouldEnable(){
        if(this.state.password && this.state.userName){
            this.setState({
                disabled: false,
                style: styles.button
            })
        } else {
            this.setState({
                disabled: true,
                style: styles.disabledButton
            })
        }
    }

    onPasswordChange(evt){
        console.log(evt);
        let self = this;
        this.setState({
            password: evt
        }, ()=>{
            self.shouldEnable();
        });
    }

    onUserNameChange(evt){
        console.log(evt);
        let self = this;
        this.setState({
            userName: evt
        }, ()=>{
            self.shouldEnable();
        });
    }

    onClick(){
        this.props.login(this.state);
    }

    render(){
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                <KeyboardAvoidingView behavior={"padding"} style={styles.childChild}>
                <Image style={styles.welcome} source={require("../img/spaceage.png")}></Image>
                <BlurView blurType="dark" blurAmount={10} style={styles.inputContainer}>
                <InputWithIcon color="rgb(255, 255, 255)"
                                iconName="user-circle"
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                size={20}
                                placeholder="E-Mail"
                                secureTextEntry={false}
                                callback={this.onUserNameChange}/>
                <InputWithIcon color="rgb(255, 255, 255)"
                                iconName="key"
                                size={20}
                                placeholder="Password"
                                secureTextEntry={true}
                                returnKeyType={"done"}
                                callback={this.onPasswordChange}/>
                </BlurView>
                <TouchableOpacity
                    disabled={this.state.disabled}
                    style={this.state.style}
                    onPress={this.onClick}
                    accessibilityLabel="Sign In"
                    title="Sign In">
                        <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
                {this.props.token && this.props.user ? <Redirect to="/dash"/> : null}
                {this.props.error ? <ErrorComponent callback={this.props.closeError} error={this.props.error}/> : null}
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
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0)"
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
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0)",
        borderRadius: 5,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        alignItems: "center"
    },
    disabledButton: {
        width: "50%",
        backgroundColor: "rgba(2, 35, 73, 0.01)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "rgb(255, 255, 255)"
    }
});

export default connect(
    (state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        closeError: ()=>{
            dispatch(removeUserError());
        },
        loadUser: ()=>{
            dispatch(getUser(dispatch));
        },
        login: ({userName, password})=> {
            dispatch(loginUser(dispatch, { username: userName, password: password }));
        }
    }))(App);
