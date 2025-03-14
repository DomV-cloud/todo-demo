import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Tutorial/common/Header";
import PageNotFound from "./PageNotFound";
// import TasksHomePage from "./todoApp/redux/home/TasksHomePage";
import TasksHomePageTlk from "./todoApp/redux-tlk/home/TasksHomePageTlk";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        {/* <Route path="/tasks" element={<TasksHomePage />} /> */}
        <Route path="/tasks/tlk" element={<TasksHomePageTlk />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
