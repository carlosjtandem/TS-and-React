import { type ReactNode } from "react";

type CourseGoalProps = {
  tittle: string;
  children: ReactNode;
};

export default function CourseGoal({ tittle, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{tittle}</h2>
        <h2>{children}</h2>
      </div>
      <button>DELETE</button>
    </article>
  );
}
