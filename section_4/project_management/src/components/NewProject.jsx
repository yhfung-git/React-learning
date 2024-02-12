import { useRef } from "react";

import Input from "./Input";

const NewProject = ({ onCancel, onAddProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const buttonClasses =
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    onAddProject({ title, description, dueDate });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  };

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
          <button className={buttonClasses} onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          type="text"
          name="title"
          id="title"
          label="Title"
          ref={titleRef}
        />
        <Input
          name="description"
          id="description"
          label="Description"
          rows="3"
          textarea
          ref={descriptionRef}
        />
        <Input
          type="date"
          name="date"
          id="date"
          label="Due Date"
          ref={dueDateRef}
        />
      </div>
    </div>
  );
};

export default NewProject;
