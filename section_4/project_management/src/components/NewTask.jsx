import { useState, useRef } from "react";

import Modal from "./Modal";

const NewTasks = ({ onAdd }) => {
  const dialog = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const inputClasses =
    "w-64 px-2 py-1 rounded-sm text-stone-600 bg-stone-200 border-b-2 border-stone-300 focus:outline-none focus:border-stone-600";
  const buttonClasses = "text-stone-700 hover:text-stone-950";

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") return dialog.current.open();

    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...please make sure you provide a valid value.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className={inputClasses}
          onChange={handleChange}
          value={enteredTask}
        />
        <button className={buttonClasses} onClick={handleClick}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTasks;
