import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Homepage from "./components/Homepage";
import Project from "./components/Project";

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

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const id = Date.now();
      const newProject = { ...projectData, id, tasks: [] };

      return {
        ...prevState,
        selectedProjectId: id,
        projects: [newProject, ...prevState.projects],
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const id = Date.now();
      const newTask = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          project.tasks = project.tasks.concat({ id, text });
        }
        return project;
      });

      return {
        ...prevState,
        projects: newTask,
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      const updatedTasks = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          project.tasks = project.tasks.filter((task) => task.id !== id);
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedTasks,
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddProject}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Homepage onStartAddProject={handleStartAddProject} />;
  } else {
    const project = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
    );

    content = (
      <Project
        project={project}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <div className="flex mt-8 min-h-screen">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <main className="mx-auto">{content}</main>
    </div>
  );
};

export default App;
