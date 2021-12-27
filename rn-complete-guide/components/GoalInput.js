import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const onTextChange = (newGoal) => setEnteredGoal(newGoal);
    const addGoalHandler = () => {
        props.onAddGoal({ id: Math.random().toString(), value: enteredGoal });
        setEnteredGoal('');
    }
    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={onTextChange}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color="red" title={"CANCEL"} onPress={cancelGoalHandler} /></View>
                    <View style={styles.button}><Button color="blue" title={"ADD"} onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#eee'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    button: { borderRadius: 5, width: '40%' },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    }
});

export default GoalInput;