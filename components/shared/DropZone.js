import React, { Component } from "React";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

class DropZone extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            status: "nothing"
        }
        this._startShouldSetResponder = this._startShouldSetResponder.bind(this);
        this._moveShouldSetResponder = this._moveShouldSetResponder.bind(this);
        this._responderGrant = this._responderGrant.bind(this);
        this._responderRelease = this._responderRelease.bind(this);
        this._responder = {
            onStartShouldSetResponder: this._startShouldSetResponder,
            onMoveShouldSetResponder: this._moveShouldSetResponder,
            onResponderGrant: this._responderGrant,
            onResponderRelease: this._responderRelease
        }
    }

    _startShouldSetResponder(evt){
        return true
    }

    _moveShouldSetResponder(evt){
        return true
    }

    _responderGrant(evt){
        console.log("_DROPZONE RESPONDER GRANT");
        this.setState({
            status: "_DROPZONE RESPONDER GRANT"
        })
    }

    _responderRelease(evt){
        console.log("_DROPZONE RESPONDER RELEASED");
        this.setState({
            status: "_DROPZONE RESPONDER RELEASED"
        })
    }

    render(){
        return(
            <View style={styles.dropZone} {...this._responder}>
            <Text>{this.state.status}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    throwAway: {
        height: 100,
        width: "100%",
        backgroundColor: "rgb(136, 68, 82)",
        zIndex: 500
    }
})

export default DropZone;
