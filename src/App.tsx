import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddToDoForm from "./modules/todo/components/AddToDoForm";
import List from "./modules/todo/components/List";
import About from "./modules/todo/components/About";
import ToDo from "./modules/todo/pages/Todo";
import Header from "./shared/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/add" element={<AddToDoForm />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
