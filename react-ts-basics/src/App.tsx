import "./App.css";
import goalsImg from "./assets/react.svg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  //with export we can use this type in all the application
  title: string;
  description: string;
  id: number;
};

function App() {
  // const [goals, setGoals] = useState([]);  // common use, in this case the goals is an array of objects
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    console.log("Add goal");
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      // const newGoals = [...prevGoals, newGoal];  // this is the same as the next line
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id)); //Returns a new array without the goal with the given id
  }

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      {/* <button onClick={handleAddGoal}>Add goal</button> */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </div>
  );
}

export default App;
