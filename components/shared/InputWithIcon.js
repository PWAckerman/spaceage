import React, { Component } from "React";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  TextInput,
  View
} from "react-native";


const InputWithIcon = ({iconName, secureTextEntry, keyboardType, returnKeyType, color, size, placeholder, callback})=>{
    return (
        <View style={styles.inputWithIcon}>
                <Icon style={{backgroundColor: "transparent"}} name={iconName} size={size} color={color}/>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    keyboardType={keyboardType || null}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholderTextColor="rgb(161, 161, 161)"
                    returnKeyType={returnKeyType}
                    keyboardAppearance={"dark"}
                    onChangeText={(str) => {callback(str)}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWithIcon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        height: 40,
        borderWidth: 1,
        borderStyle: "solid",
        paddingLeft: 10,
        borderRadius: 0,
        borderColor: "rgb(255, 255, 255)"
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: "transparent",
        color: "rgb(255, 255, 255)"
    },
    inputIcon: {
        padding: 20,
    }
});

export default InputWithIcon;
