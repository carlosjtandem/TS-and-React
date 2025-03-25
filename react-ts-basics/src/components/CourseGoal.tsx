type CourseGoalProps = {
  tittle: string;
  description: string;
}

export default function CourseGoal({ tittle, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{tittle}</h2>
        <h2>{description}</h2>
      </div>
      <button>DELETE</button>
    </article>
  );
}
