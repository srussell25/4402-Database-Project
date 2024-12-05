import logo from "./logo.svg";
import "./App.css";
import DatabaseEntry from "./components/databaseEntry";
import CategoryEntry from "./components/categoryEntry";
import AddEntry from "./components/addEntry";
import ITEMAddEntry from "./components/ITEMaddentry";
import { useState, useEffect } from "react";

// const express = require('express');
// const db = require('../../../database/database');
// const queries = require('../../../database/queries');
// const app = express();
// app.use(express.json());

function App() {
  const [addEntryOpen, setAddEntryOpen] = useState(false);
  const [ITEMaddEntryOpen, ITEMsetAddEntryOpen] = useState(false);
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log("Categories API data:", data); // Check the data structure
        setCategoryData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
    fetch("http://localhost:3001/api/employees")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  async function handleDeleteCategory(ID) {
    const res = await fetch(`http://localhost:3001/api/deleteCategory/${ID}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    setCategoryData(data);
  }

  // useEffect(()=>{
  //   fetch('http://localhost:3001/api/categories')
  //     .then(response => response.json())
  //     .then(data => setCategoryData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, [])

  const handleEntryAddClick = () => {
    setAddEntryOpen(true);
  };
  const ITEMhandleEntryAddClick = () => {
    ITEMsetAddEntryOpen(true);
  };
  const handleEntryAddClose = () => {
    setAddEntryOpen(false);
  };
  const ITEMhandleEntryAddClose = () => {
    ITEMsetAddEntryOpen(false);
  };

  return (
    <>
      <div className="centerBox">
        <h1>Grocery Goblins</h1>

        <div className="entries">
          <div className="header">
            <h1>Employees:</h1>
            <button onClick={handleEntryAddClick}>+</button>
          </div>

          {data.map((entry) => {
            return <DatabaseEntry {...entry} />;
          })}
        </div>
        <div className="Itementries">
          <div className="header">
            <h1>Items:</h1>
            <button onClick={ITEMhandleEntryAddClick}>+</button>
          </div>

          {categoryData.map((entry) => {
            console.log(entry);
            return (
              <CategoryEntry {...entry} handleDelete={handleDeleteCategory} />
            );
          })}
        </div>
      </div>
      {addEntryOpen && <AddEntry closeAddJob={handleEntryAddClose} />}
      {ITEMaddEntryOpen && (
        <ITEMAddEntry closeAddJob={ITEMhandleEntryAddClose} />
      )}
    </>
  );
}

export default App;
