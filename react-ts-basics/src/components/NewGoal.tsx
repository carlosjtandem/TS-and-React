import { FormEvent } from "react";

export default function NewGoal() {
  function handleSubmit(event: FormEvent) {
    //prevent user default behaivor
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your goal:</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label>Short summary:</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
