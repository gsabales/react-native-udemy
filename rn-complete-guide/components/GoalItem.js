import React from "react";
import { Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
    return (
        <Text style={styles.listItem}>{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc'
    }
});

export default GoalItem;