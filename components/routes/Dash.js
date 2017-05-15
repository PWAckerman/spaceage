import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import { Redirect, withRouter} from "react-router-native";
import {
    StyleSheet,
    ScrollView,
    View,
    LayoutAnimation,
    TouchableOpacity,
    Text
} from "react-native";
import { connect } from "react-redux";
import PlanogramButton from "../shared/PlanogramButton.js";
import DirectoryButton from "../shared/DirectoryButton.js";
import BackButton from "../shared/BackButton.js";
import Header from "../shared/Header.js";
import NewPlanogramButton from "../shared/NewPlanogramButton.js";
import SelectNew from "../shared/SelectNew.js";
import { getDirectories, setCurrentDirectory } from '../../actions/directoryActions.js';
import { getPlanograms } from '../../actions/planogramActions.js';
import { getUser } from '../../actions/userActions.js';

class Dash extends Component {
    constructor(props, context){
        super(props, context);
        LayoutAnimation.spring();
        this.context = context;
        this.state = {
            showNew: false,
            scroll: true,
            planogramEditor: false,
            newDirectory: false,
            initialLoadDone: false,
            coords: {
                x: 0,
                y: 0
            }
        }
        this.showNew = this.showNew.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
        this.props.loadDirectories(this.props.user.id, this.props.token);
        this.props.loadPlanograms(this.props.user.id, this.props.token);
    }

    componentDidUpdate(){
        console.log('yo the component did update');
        console.log(this.state);
        if(this.props.directories && !this.state.initialLoadDone){
            console.log(this.props.directories)
            let root = this.props.directories.filter((dir)=> dir.root )[0];
            console.log('ROOT', root);
            this.props.setCurrentDirectory(root);
            this.setState(Object.assign({}, this.state, {
                initialLoadDone: true
            }));
        }
    }

    goBack(){
        let currentDirectory = this.props.directories.filter(dir=> dir.id === this.props.currentDirectory.parent)[0];
        this.props.setCurrentDirectory(currentDirectory);
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
                this.setState(Object.assign({}, this.state, {
                    newDirectory: true
                }))
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
        console.log('rerender');
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
            {this.props.currentDirectory ? <Header config={this.props.currentDirectory} back={this.goBack}>{ this.props.currentDirectory.root ? null : <BackButton style={styles.backButton} handler={this.goBack}/>}</Header> : null }
            <ScrollView
                scrollEnabled={this.state.scroll}
                style={styles.scrollContainer}
                contentContainerStyle={styles.flexWrapper}>
                {this.props.currentDirectory ? this.props.planograms ? this.props.planograms.filter((planogram)=> planogram.directory === this.props.currentDirectory.id).map((planogram, inx)=> <PlanogramButton key={inx} planogram={planogram} name={planogram.name}/>) : null : null}
                {this.props.currentDirectory ? this.props.directories.filter((dir, inx)=> dir.parent === this.props.currentDirectory.id).map((directory, inx) => <DirectoryButton key={inx} callback={this.props.setCurrentDirectory} directory={directory} name={directory.name}/> ) : null}
                <NewPlanogramButton callback={this.showNew}/>
                { this.state.showNew ? <SelectNew coords={this.state.coords} /> : null }
                { this.state.planogramEditor ? <Redirect to="/planogrameditor"/> : null }
                { this.state.newDirectory ? <Redirect to="/newdirectory"/> : null}
                { this.props.error ? <ErrorComponent error={this.state.error}/> : null}
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
    backButton: {
        backgroundColor: "transparent",
        position: "absolute",
        color: "rgb(255, 255, 255)",
        left: 10,
        top: 15,
        width: 30
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

export default withRouter(connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error,
        planograms: state.planogram.planograms,
        currentDirectory: state.directory.directory,
        directories: state.directory.directories
    }),
    (dispatch)=>({
        //dispatch actions here
        loadPlanograms: (user, token)=> dispatch(getPlanograms(dispatch, user, token)),
        setCurrentDirectory: (directory)=> dispatch(setCurrentDirectory(directory)),
        loadDirectories: (user, token)=> dispatch(getDirectories(dispatch, user, token))
    }))(Dash));
