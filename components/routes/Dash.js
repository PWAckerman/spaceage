import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import { Redirect, withRouter} from "react-router-native";
import {
    StyleSheet,
    ScrollView,
    LayoutAnimation
} from "react-native";
import PlanogramButton from "../shared/PlanogramButton.js";
import DirectoryButton from "../shared/DirectoryButton.js";
import NewPlanogramButton from "../shared/NewPlanogramButton.js";
import SelectNew from "../shared/SelectNew.js";

class Dash extends Component {
    constructor(props, context){
        super(props, context);
        LayoutAnimation.spring();
        this.context = context;
        this.state = {
            showNew: false,
            scroll: true,
            planogramEditor: false,
            coords: {
                x: 0,
                y: 0
            }
        }
        this.showNew = this.showNew.bind(this);
    }

    showNew(evt){
        if(!this.state.showNew){
            this.setState(Object.assign({}, this.state, {
                showNew: true,
                scroll: false,
                coords: {
                    x: parseInt(evt.nativeEvent.pageX) - 50,
                    y: parseInt(evt.nativeEvent.pageY) - 50
                }
            }));
        } else {
            let deltas = {
                x: parseInt(evt.nativeEvent.pageX) - (this.state.coords.x + 50),
                y: parseInt(evt.nativeEvent.pageY) - (this.state.coords.y + 50)
            }
            console.log(deltas);
            if(deltas.y > 25 && deltas.y < 75){
                console.log("new planogram");
                this.setState(Object.assign({}, this.state, {
                    planogramEditor: true
                }
                ));
                console.log(this.state);
            }
            if(deltas.y < 25 && deltas.y > -25){
                console.log("new directory");
            } else if (deltas.y <= -25 || deltas.y >= 75){
                this.setState(Object.assign({}, this.state, {
                    showNew: false,
                    scroll: true,
                    coords: {
                        x: 0,
                        y: 0
                    }
                }));
            }
        }
    }

    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
            <ScrollView
                scrollEnabled={this.state.scroll}
                style={styles.scrollContainer}
                contentContainerStyle={styles.flexWrapper}>
                <PlanogramButton name="plano1"/>
                <PlanogramButton name="plano2"/>
                <PlanogramButton name="plano1"/>
                <PlanogramButton name="plano2"/>
                <PlanogramButton name="plano1"/>
                <PlanogramButton name="plano2"/>
                <PlanogramButton name="plano1"/>
                <PlanogramButton name="plano2"/>
                <PlanogramButton name="plano1"/>
                <DirectoryButton name="directory1"/>
                <NewPlanogramButton callback={this.showNew}/>
                { this.state.showNew ? <SelectNew coords={this.state.coords} /> : null }
                { this.state.planogramEditor ? <Redirect to="/planogrameditor"/> : null }
            </ScrollView>
        </LinearGradient>
    }
}

const styles = StyleSheet.create({
    flexWrapper: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row"
    },
    container: {
        flex: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        marginTop: 20
    },
    scrollContainer: {
        marginTop: 20
    },
    childContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default withRouter(Dash);
