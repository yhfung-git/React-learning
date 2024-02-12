import { forwardRef } from "react";

const Input = forwardRef(({ textarea, label, name, ...props }, ref) => {
  let inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  if (textarea) inputClasses += " min-h-20 max-h-52";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={name}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={inputClasses} ref={ref}></textarea>
      ) : (
        <input {...props} className={inputClasses} ref={ref} />
      )}
    </p>
  );
});

Input.displayName = "Input";
export default Input;
