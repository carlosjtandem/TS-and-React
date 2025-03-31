import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App"; // Importing the CourseGoal type from App.tsx. We need to change the name because we are using the same name.

type CourseGoalListProps = {
  goals: CourseGoalType[]; // The goals prop is an array of CourseGoal objects.
  onDeleteGoal: (id: number) => void; // The onDelete prop is a function that takes an id as an argument and returns void.
};

//We have exported the CourseGoalListProps type so we can use it in this file an other as well.
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
