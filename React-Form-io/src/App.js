import "./App.css";
import { Formio } from "@formio/react";
import FormioContrib from "@formio/contrib";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";
import Builder from "./components/Builder";

import FormRender from "./components/FormRender";
import FormList from "./components/FormList";
import AddTutorial from "./components/AddTutorial";
import List from "./components/list";
//Formio.use(FormioContrib);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes basename={"/react-app-starterkit"}>
        <Route path="/" element={<Home />}></Route>
        <Route path="components" element={<Components />}></Route>
        <Route path="AddTutorial" element={<AddTutorial />}></Route>
        <Route path="FormRender" element={<FormRender />}></Route>
        <Route path="List" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
