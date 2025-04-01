import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  //To use in each input
  const goal = useRef<HTMLInputElement>(null); // We should initializate with null because is necesary when we use useRef
  const summary = useRef<HTMLInputElement>(null);

  // A prop that recieve a value as a function

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //prevent user default behaivor
    event.preventDefault();

    const enteredGoal = goal.current!.value; // '!'= means that the values not should be null.
    const enteredSummary = summary.current!.value;
    // we'll use useREF to get info from the input values
    // new FormData(event.currentTarget);
    event.currentTarget.reset(); // To clear the inputs after submiting
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your goal:</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label>Short summary:</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
