import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "../shared/ErrorComponent.js";
import {
    StyleSheet,
    LayoutAnimation
} from "react-native";
import { Redirect, withRouter} from "react-router-native";
import { connect } from "react-redux";
import PlanogramEditor from "../planogrameditor/PlanogramEditor.js";

class PlanogramEditorRoute extends Component {
    constructor(props, context){
        super(props, context);
        LayoutAnimation.spring();
        this.context = context;
        this.state = {
            //TODO
        }
    }

    render() {
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                <PlanogramEditor/>
                {this.props.error ? <ErrorComponent error={this.props.error}/> : null}
               </LinearGradient>
    }
}

const styles = StyleSheet.create({
    childContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default withRouter(connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        //dispatch actions here
        standin: (th)=> th
    }))(PlanogramEditorRoute));
