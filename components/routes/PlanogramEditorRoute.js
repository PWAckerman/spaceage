import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
    LayoutAnimation
} from "react-native";
import PlanogramEditor from "../planogrameditor/PlanogramEditor.js";

export default class PlanogramEditorRoute extends Component {
    constructor(props, context){
        super(props, context);
        LayoutAnimation.spring();
        this.context = context;
        this.state = {
            //TODO
        }
    }

    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
                <PlanogramEditor/>
               </LinearGradient>
    }
}

const styles = StyleSheet.create({

});
