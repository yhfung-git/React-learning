import logo from "../assets/logo.png";
import Button from "./Button";

const Homepage = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={logo} alt="Logo" className="object-contain w-16 h-16 mx-auto" />
      <h2 className="font-bold text-stone-500 text-xl my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default Homepage;
