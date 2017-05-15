import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "../shared/ErrorComponent.js";
import Header from "../shared/Header.js";
import NewDirectoryContainer from "../newdirectory/NewDirectoryContainer.js";
import { Redirect, withRouter} from "react-router-native";
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import { connect } from "react-redux";

class NewDirectoryRoute extends Component {
    render() {
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                <Header config={{name: 'New Directory'}}></Header>
                <NewDirectoryContainer style={styles.otherContainer}></NewDirectoryContainer>
                { this.props.error ? <ErrorComponent error={this.state.error}/> : null}
               </LinearGradient>
    }
}

const styles = StyleSheet.create({
    childContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    otherContainer: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "rgba(255, 0, 0, 0)",
        width: "100%",
        height: Dimensions.get("window").height
    },
});

export default withRouter(connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        //dispatch actions here
        thing: (th)=> th
    }))(NewDirectoryRoute));
