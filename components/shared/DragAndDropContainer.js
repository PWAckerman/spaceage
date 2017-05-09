import React, { Component } from "React";

import {
    StyleSheet,
    View,
    ScrollView
} from "react-native";

import Draggable from "./Draggable.js";

class DropZone extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            zone: this.props.inx
        }
    }

    isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        console.log("drop zone");
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height ? this.state : false;
    }

    setDropZoneValues(event){
        this.setState(Object.assign({}, this.state, {
            dropZoneValues : event.nativeEvent.layout
        }));
        this.props.register(this);
    }

    render(){
        return (
            <View
                onLayout={this.setDropZoneValues.bind(this)}
                style={this.props.style}>
                {this.props.children}
            </View>
        )
    }
}


export default class DragAndDropContainer extends Component{
    constructor(props, context){
        super(props, context);
        this.zones = [];
        this.registerDropZone = this.registerDropZone.bind(this);
        this.state = {
            scroll: true
        }
        this.freezeScroll = this.freezeScroll.bind(this);
        this.unfreezeScroll = this.unfreezeScroll.bind(this);
    }

    freezeScroll(){
        console.log("FREEZE!");
        this.setState({
            scroll: false
        })
    }

    unfreezeScroll(){
        console.log("UNFREEZE!");
        this.setState({
            scroll: true
        })
    }



    isDropZoneMaster(gesture, component){
        var dz = component.state.dropZoneValues;
        console.log(component.state.dropZoneValues);
        console.log("drop zone");
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    isDropZone(gesture){
        return this.zones.some(zone => zone.isDropZone(gesture)) ? this.zones.filter(zone => zone.isDropZone(gesture))[0].state : false;
    }

    whichDropZone(){

    }

    registerDropZone(zone){
        this.zones.push(zone);
        console.log(this.zones.length)
    }

    render(){
        return (
            <View style={styles.mainContainer}>
            <View>
            {this.props.zones.map((zone, inx)=>{
                return (<DropZone inx={inx} key={inx} dropCallback={this.props.zoneCallback} parent={this} register={this.registerDropZone} style={this.props.style}>
                                {zone}
                       </DropZone>)
            })}
            </View>

                {this.renderDraggable()}
            </View>
        );
    }

    renderDraggable(zones){
        let self = this;
        return (
            <ScrollView scrollEnabled={this.state.scroll} horizontal={true} pagingEnabled={true} style={styles.draggableContainer}>
                {this.props.children.map((child, inx)=>{
                    return (<Draggable dropCallback={this.props.dropCallback} endCallback={this.unfreezeScroll} startCallback={this.freezeScroll} zones={zones} parent={self} key={inx}>
                                {child}
                            </Draggable>)
                })}

            </ScrollView>
        );
    }
}

let CIRCLE_RADIUS = 36;
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    style:{
        paddingTop: 10
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : "center",
        color       : "#fff"
    },
    draggableContainer: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
    },
    circle      : {
        backgroundColor     : "#1abc9c",
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});
