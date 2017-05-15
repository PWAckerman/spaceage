import React, {Component} from "react";
import {
    StyleSheet,
    View
} from "react-native";
import { connect } from "react-redux";
import DashNav from "./DashNav.js";

// const NavBar = ({mode = "dash"}, context) => {
//     console.log("context", context);
//
// }

class NavBar extends Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        if(this.props.token){
            return (
                <View style={styles.navBarContainer}>
                    <DashNav />
                </View>
            )
        } else {
            return null
        }
    }
}

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

export default connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        //dispatch actions here
    }))(NavBar);
