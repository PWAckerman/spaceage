import React, {Component} from "react";
import {
    StyleSheet,
    ScrollView
} from "react-native";
import Tag from "./Tag";

const TagContainer = ({tags}) => (
    <ScrollView showsHorizontalScrollIndicator={false} snapToAlignment={"start"} horizontal={true} style={styles.tagContainer}>
        {tags.map((tag, inx) => <Tag key={inx} tag={tag}/>)}
    </ScrollView>
);

const styles = StyleSheet.create({
    tagContainer: {
        height: 50,
        marginTop: 20,
        width: 400,
    },
});

export default TagContainer;
