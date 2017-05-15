import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import ErrorComponent from "../shared/ErrorComponent.js";
import {withRouter} from "react-router-native";
import { connect } from "react-redux";
import {
    StyleSheet
} from "react-native";
import PlanogramOverview from "../planogramoverview/PlanogramOverview.js";

class PlanogramOverviewRoute extends Component {
    render() {
        return <LinearGradient colors={["#000428", "#004e92"]} style={styles.childContainer}>
                <PlanogramOverview name={"Planogram 1"} />
                { this.props.error ? <ErrorComponent error={this.state.error}/> : null}
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

export default withRouter(connect((state)=>({
        token: state.user.token,
        user: state.user.user,
        error: state.user.error
    }),
    (dispatch)=>({
        //dispatch actions here
    }))(PlanogramOverviewRoute));
