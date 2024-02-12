const Button = ({ children, ...props }) => {
  const buttonClasses =
    "px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
