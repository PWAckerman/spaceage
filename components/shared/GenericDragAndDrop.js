import React, { Component } from "React";
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from "react-native";

class GenericDragAndDrop extends Component{

    constructor(props, context){
        super(props, context);
        this._handlePanResponderEnd = this._handlePanResponderEnd.bind(this);
        this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousLeft = 0;
        this._previousTop = 0;
        this.state = {
            left: 0,
            top: 0
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <View ref={component => this._root = component} style={styles.throwAway} {...this._panResponder.panHandlers}>
            <Text>Hey baby hey baby hey</Text>
            </View>
        )
    }

    _handleStartShouldSetPanResponder(){
        return true;
    }

    _handleMoveShouldSetPanResponder(){
        return true;
    }

    _handlePanResponderGrant(evt, gestureState){
        //gesture started
        console.log("START");
        console.log(gestureState);
    }

    _handlePanResponderMove(evt, gestureState){
        //gesture distance
        console.log("MOVE");
        console.log(gestureState);
        // this.style = Object.assign({}, styles.throwAway, {left: this.state.left , top: this.state.top});

        this._root.setNativeProps({style: {left: this._previousLeft + gestureState.dx, top: this._previousTop + gestureState.dy}});
    }

    _handlePanResponderRelease(evt, gestureState){
        console.log("RELEASE");
        console.log(gestureState);
    }

    _handlePanResponderEnd(evt, gestureState){
        console.log("END");
        console.log(gestureState);

    }
}

const styles = StyleSheet.create({
    throwAway: {
        height: 100,
        width: 100,
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "rgb(255, 27, 74)",
        zIndex: 500
    }
})

export default GenericDragAndDrop;
