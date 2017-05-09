import React, {Component} from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions
} from "react-native";

import PlanogramTypePicker from "./PlanogramTypePicker.js";

const choices = {
    "shelf": "shelf",
    "bin": "bin",
    "grid": "grid"
};

class PlanogramEditor extends Component{
    constructor(props, context){
        super(props,context);
        this.state = {
            planogramType: "shelf"
        };
        this.setPickerValue = this.setPickerValue.bind(this);
    }

    newMode(newMode){
        this.setState({mode: newMode});
    }


    setPickerValue(val){
        this.setState(Object.assign({}, this.state, { planogramType: val }))
    }

    render(){
        return (
            <View style={styles.planogramEditorContainer}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={"rgba(170, 170, 170, 0.71)"}
                        placeholder="Planogram Name"
                        keyboardAppearance={"dark"}
                    ></TextInput>
                    <TextInput
                        style={styles.multiLineInput}
                        placeholderTextColor={"rgba(170, 170, 170, 0.71)"}
                        placeholder="Planogram Description"
                        multiline={true}
                        keyboardAppearance={"dark"}
                    ></TextInput>
                    <TextInput
                        style={styles.input}
                        value={this.state.planogramType + ""}
                        placeholderTextColor={"rgba(170, 170, 170, 0.71)"}
                        placeholder="Planogram Type"
                    ></TextInput>
                </View>
                <PlanogramTypePicker choices={choices} selection={this.state.planogramType} callback={this.setPickerValue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexWrapper: {
        alignItems: "flex-start"
    },
    formContainer: {
        marginTop: 60
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    planogramEditorContainer: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "rgba(255, 0, 0, 0)",
        width: "100%",
        height: Dimensions.get("window").height,
    },
    input: {
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 3,
        borderRadius: 5,
        marginBottom: 5,
        height: 40,
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgb(255, 255, 255)"
    },
    multiLineInput: {
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 3,
        borderRadius: 5,
        marginBottom: 5,
        fontSize: 17,
        height: 80,
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgb(255, 255, 255)"
    }
});

export default PlanogramEditor;
