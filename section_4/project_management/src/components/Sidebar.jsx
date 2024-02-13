import Button from "./Button";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  const asideClasses =
    "bg-stone-900 text-stone-50 rounded-tr-xl w-1/3 px-8 py-16 md:w-72";
  const titleClasses = "mb-8 uppercase font-bold md:text-xl text-stone-200";

  return (
    <aside className={asideClasses}>
      <h2 className={titleClasses}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let buttonClasses =
            "w-full text-left px-2 py-1 my-1 capitalize rounded-sm hover:text-stone-200 hover:bg-stone-800disabled:bg-stone-800 disabled:text-stone-600 disabled:pointer-events-none";

          project.id === selectedProjectId
            ? (buttonClasses += " bg-stone-800 text-stone-200")
            : (buttonClasses += " text-stone-400");

          return (
            <li key={project.id}>
              <button
                className={buttonClasses}
                onClick={() => onSelectProject(project.id)}
                disabled={selectedProjectId === null}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
