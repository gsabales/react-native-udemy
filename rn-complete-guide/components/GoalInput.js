import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const onTextChange = (newGoal) => setEnteredGoal(newGoal);
    const addCourseGoalHandler = () => {
        props.onAddGoal({ id: Math.random().toString(), value: enteredGoal });
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                onChangeText={onTextChange}
                value={enteredGoal} />
            <Button style={styles.button} title={"ADD"} onPress={addCourseGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    button: { borderRadius: 5 }
});

export default GoalInput;