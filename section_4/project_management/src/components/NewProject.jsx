import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onCancel, onAddProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const dialog = useRef();

  const buttonClasses =
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      return dialog.current.open();
    }

    onAddProject({ title, description, dueDate });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...please make sure you provide a valid value for every input
          field.
        </p>
      </Modal>
      <div className="w-[35rem] my-16">
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
    </>
  );
};

export default NewProject;
