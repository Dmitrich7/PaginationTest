import './App.css';
import React, {useState,useEffect} from "react";
import PaginatedTable from "./components/PaginatedTable/PaginatedTable";
import Modal from "./components/Modal/Modal";

function App() {

  return (
    <div className="App">
      <PaginatedTable/>
    </div>
  );
}

export default App;
