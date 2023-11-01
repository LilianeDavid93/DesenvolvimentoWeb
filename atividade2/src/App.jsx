import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </>
  );
}

export default App;
