import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Animated
} from "react-native";

class NewPlanogramButton extends Component {
    onStartShouldSetResponder(evt){
        console.log("onstartshouldsetresponder");
        return true;
    }

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
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
            <TouchableOpacity
                onPressIn={(evt) => this.props.callback(evt)}
                onPressOut={(evt) => this.props.callback(evt)}
                >
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

                    <Image style={styles.planogramIcon} source={require("../../img/plusicon.png")}/>
                    <Text>New...</Text>
                </Animated.View>
                </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    planogramButtonContainer: {
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
    planogramIcon: {
        height: 70,
        width: 70
    }
});

export default NewPlanogramButton;
