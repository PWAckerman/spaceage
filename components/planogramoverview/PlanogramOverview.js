import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView
} from "react-native";
import TagContainer from "./TagContainer.js";
import Type from "./Type.js";
import Shelves from "./Shelves.js";
import Products from "./Products.js";

const PlanogramOverview = ({name}) => (
    <View style={styles.planogramOverviewContainer}>
        <Image source={require("../../img/planogram.jpg")} style={styles.planogramThumb}/>
        <Text style={styles.planogramName}>{name}</Text>
        <ScrollView style={styles.descriptionScroll} contentContainerStyle={styles.flexWrapper}>
            <Text style={styles.planogramDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Text style={styles.planogramDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </ScrollView>
        <TagContainer tags={["these","are","my","tags","dont","you","like","my","tags"]}/>
        <View style={styles.infoComponents}>
            <Type type={"what"}/>
            <Shelves shelfCount={5}/>
            <Products productCount={25}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    flexWrapper: {
        alignItems: "flex-start"
    },
    infoComponents: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    planogramOverviewContainer: {
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: "100%",
        marginTop: 40,
        marginBottom: 5
    },
    planogramName: {
        fontSize: 25,
        alignItems: "flex-start",
        width: 400,
        paddingLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "500",
        color: "rgb(236, 242, 201)"
    },
    descriptionScroll: {
        alignSelf: "flex-start",
        width: "100%",
        height: 100
    },
    planogramDescription: {
        fontSize: 15,
        // alignItems: "flex-start",
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "300",
        color: "rgb(236, 242, 201)"
    },
    planogramThumb: {
        height: 200,
        width: 300
    }
});

export default PlanogramOverview;
