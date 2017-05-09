import React, {Component} from "react";
import {
    Animated
} from "react-native";

class SlideUpMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heightValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.state.heightValue.setValue(0);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
        this.state.heightValue,                 // Animate `bounceValue`
            {
                toValue: 50,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }

    render(){
        return (
                <Animated.View style={{
                    ...this.props.style,
                    transform: [{scale: this.state.heightValue }]
                }}>
                    {this.props.children}
                </Animated.View>
        )
    }
}

export default SlideUpMenu;
