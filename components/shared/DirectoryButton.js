import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    Text,
    Animated,
    TouchOpacity
} from "react-native";
import NavLink from "./NavLink.js";

class DirectoryButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
        this.callbackWrapper = this.callbackWrapper.bind(this);
    }

    callbackWrapper(evt){
        this.props.callback(this.props.directory);
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
        this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 1,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }

    render(){
        return (
            <NavLink handler={this.callbackWrapper}>
                <Animated.View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(236, 242, 201)",
                    height: 100,
                    width: 100,
                    borderRadius: 5,
                    marginLeft: 8,
                    marginRight: 8,
                    marginTop: 8,
                    marginBottom: 8,
                    transform: [{scale: this.state.bounceValue }]
                }}>
                    <Image style={styles.directoryIcon} source={require("../../img/folder.png")}/>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={{color: "#022349"}}>{this.props.name}</Text>
                </Animated.View>
            </NavLink>
        )
    }
}

const styles = StyleSheet.create({
    directoryButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        height: 100,
        width: 100,
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8
    },
    directoryIcon: {
        height: 70,
        width: 70
    }
});

export default DirectoryButton;
