import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

const BackButton = ({handler, style}) => {
    return (
        <TouchableWithoutFeedback style={{width: 30, height: 40, zIndex: 52}} onPress={handler}>
            <Icon  style={style} size={30} name="angle-left" backgroundColor='rgba(255, 255, 255, 0)'/>
        </TouchableWithoutFeedback>
    )
}

export default BackButton;
