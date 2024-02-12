import Button from "./Button";

const Sidebar = ({ onStartAddProject }) => {
  const asideClasses =
    "bg-stone-900 text-stone-50 rounded-tr-xl w-1/3 px-8 py-16 md:w-72";
  const titleClasses = "mb-8 uppercase font-bold md:text-xl text-stone-200";

  return (
    <aside className={asideClasses}>
      <h2 className={titleClasses}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
