import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const updateCourseGoalsHandler = (newGoal) =>
    setCourseGoals((currentGoals) => [...currentGoals, newGoal]);

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={updateCourseGoalsHandler} />
      <FlatList
        style={styles.courseList}
        data={courseGoals}
        keyExtractor={item => item.id}
        renderItem={data => <GoalItem title={data.item.value} />} />
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
