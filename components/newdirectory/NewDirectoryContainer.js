import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions
} from "react-native";


class NewDirectoryContainer extends Component{
    constructor(props, context){
        super(props,context);
        this.state = {
        };
    }

    render(){
        return (
            <View style={styles.newDirectoryContainer}>
                <Text>This is the new directory container</Text>
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
    newDirectoryContainer: {
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

export default NewDirectoryContainer;
