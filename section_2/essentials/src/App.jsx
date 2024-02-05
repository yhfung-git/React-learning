import Header from "./components/Header";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

export default App;
