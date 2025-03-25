import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   tittle: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <h2>{children}</h2>
      </div>
      <button>DELETE</button>
    </article>
  );
}
