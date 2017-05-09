import React, { Component } from "React";

import {
    StyleSheet,
    PanResponder,
    Animated
} from "react-native";


class Draggable extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => {
                this.props.startCallback();
                return true
            },
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                console.log("check if drop zone");
                this.props.endCallback();
                let isDropZone = this.props.parent.isDropZone(gesture);
                if(isDropZone){
                    if(this.props.dropCallback(this.props.children.props, isDropZone)){
                        this.setState({
                            showDraggable : false
                        })
                    } else {
                        Animated.spring(
                            this.state.pan,
                            {toValue:{x:0,y:0}}
                        ).start();
                    }
                } else {
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                    ).start();
                }
            }
        });
    }

    render(){
        if(this.state.showDraggable){
            return (
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[this.state.pan.getLayout(), styles.paddingTop]}>
                    {this.props.children}
                </Animated.View>
            )
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    paddingTop: {
        paddingTop: 500
    }
})

export default Draggable;
