import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import {withRouter} from "react-router-native";
import {
    StyleSheet
} from "react-native";
import PlanogramOverview from "../planogramoverview/PlanogramOverview.js";

class PlanogramOverviewRoute extends Component {
    render() {
        return <LinearGradient colors={["#022349", "#535bc3"]} style={styles.childContainer}>
                <PlanogramOverview name={"Planogram 1"} />
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

export default withRouter(PlanogramOverviewRoute);
