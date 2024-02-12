import Input from "./Input";

const NewProject = ({ onCancel }) => {
  const buttonClasses =
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

  return (
    <div className="w-[35rem] my-16 mx-auto">
      <menu className="flex items-center justify-end gap-4 my-4 rounded">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button className={buttonClasses}>Save</button>
        </li>
      </menu>
      <div>
        <Input type="text" name="title" id="title" label="Title" />
        <Input
          name="description"
          id="description"
          label="Description"
          rows="3"
          textarea
        />
        <Input type="date" name="date" id="date" label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
