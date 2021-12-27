import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const updateCourseGoalsHandler = (newGoal) => {
    setCourseGoals((currentGoals) => [...currentGoals, newGoal]);
    setAddMode(false);
  }
  const deleteGoalHandler = (goalId) =>
    setCourseGoals((currentGoals) => currentGoals.filter(goal => goal.id !== goalId));
  const closeModalHandler = () => setAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={updateCourseGoalsHandler} onCancel={closeModalHandler}/>
      <FlatList
        style={styles.courseList}
        data={courseGoals}
        keyExtractor={item => item.id}
        renderItem={data => <GoalItem
          id={data.item.id}
          onDeleteGoal={deleteGoalHandler}
          title={data.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 45 },
  courseList: {
    marginTop: 10,
    marginBottom: 20
  }
});
