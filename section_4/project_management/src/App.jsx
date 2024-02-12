import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Homepage from "./components/Homepage";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Homepage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="flex gap-8 mt-8 h-screen">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
};

export default App;
