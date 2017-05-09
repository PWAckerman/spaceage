import React, {Component} from "react";
import {
    StyleSheet,
    PickerIOS,
} from "react-native";

const PickerItemIOS = PickerIOS.Item;

class PlanogramTypePicker extends Component{
    constructor(props, context){
        super(props,context);
        this.state = {
            planogramType: this.props.selection
        };
        this.onValueChange = this.onValueChange.bind(this);
    }



    newMode(){

    }

    onValueChange(key, value){
        this.props.callback(key);
    }


    render(){
        return (
                <PickerIOS
                  itemStyle={styles.picker}
                  selectedValue={this.props.selection}
                  onValueChange={this.onValueChange}>
                  {Object.keys(this.props.choices).map((choice) => (
                    <PickerItemIOS
                      key={choice}
                      value={this.props.choices[choice]}
                      label={choice}
                    />
                  ))}
                </PickerIOS>
        )
    }
}

const styles = StyleSheet.create({
    flexWrapper: {
        alignItems: "flex-start"
    },
    planogramEditorContainer: {
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: "100%",
        height: 100,
    },
    picker: {
        backgroundColor: "rgb(255, 255, 255)",
        position: "absolute",
        height: 100,
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 50
    }
});

export default PlanogramTypePicker;
