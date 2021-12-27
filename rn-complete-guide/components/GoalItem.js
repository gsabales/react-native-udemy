import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDeleteGoal(props.id)} >
            <Text style={styles.listItem}>{props.title}</Text>
        </TouchableOpacity>

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