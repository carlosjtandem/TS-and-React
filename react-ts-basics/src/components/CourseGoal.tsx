import { type PropsWithChildren } from "react";

//first appoach
// type CourseGoalProps = {
//   tittle: string;
//   children: ReactNode;  //Every component in react receives a children prop. ReactNode is a type that can be any JSX code
//   children: ReactNode[];  //If we want to receive multiple children
// };

//second approach
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   //children is a special prop in react. In this case gets the <p> tag sent from App.tsx
//   return (
//     <article style={{ backgroundColor: "gray" }}>
//       <div>
//         <h2>{title}</h2>
//         <h3>{children}</h3>
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// }

//Below another way to create the component
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void; //This is a function that takes an id as an argument and returns void.
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <h3>{children}</h3>
      </div>
      <button onClick={() => onDelete(id)}> DELETE</button>
    </article>
  );
}
