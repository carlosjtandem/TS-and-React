import { FC, type PropsWithChildren } from "react";

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
type CourseGoalPropsv2 = PropsWithChildren<{ title: string }>;

const CourseGoal_v2: FC<CourseGoalPropsv2> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <h3>{children}</h3>
      </div>
      <button>DELETE</button>
    </article>
  );
};
export default CourseGoal_v2; //This is the way to export the component in the same line as the function declaration
