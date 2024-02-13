import NewTasks from "./NewTask";

const Tasks = ({ onAdd, onDelete, tasks }) => {
  let content;

  tasks?.length > 0
    ? (content = (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ))
    : (content = (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ));

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {content}
    </section>
  );
};

export default Tasks;
