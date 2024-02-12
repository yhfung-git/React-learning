import Button from "./Button";

const Sidebar = ({ onStartAddProject, projects }) => {
  const asideClasses =
    "bg-stone-900 text-stone-50 rounded-tr-xl w-1/3 px-8 py-16 md:w-72";
  const titleClasses = "mb-8 uppercase font-bold md:text-xl text-stone-200";
  const buttonClasses =
    "w-full text-left px-2 py-1 my-1 capitalize rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800";

  return (
    <aside className={asideClasses}>
      <h2 className={titleClasses}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className={buttonClasses}>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
