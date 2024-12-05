
import logo from './logo.svg';
import './App.css';
import DatabaseEntry from './components/databaseEntry';
import CategoryEntry from './components/categoryEntry';
import AddEntry from './components/addEntry';
import ITEMAddEntry from './components/ITEMaddentry';
import { useState, useEffect } from 'react';
import { addCategory, addEmployee, deleteCategory, deleteEmployee, getAllCategories, getAllEmployees, updateSalary } from './api/service';


// const express = require('express');
// const db = require('../../../database/database');
// const queries = require('../../../database/queries');
// const app = express();
// app.use(express.json());

function App() {
  const [addEntryOpen, setAddEntryOpen] = useState(false);
  const [ITEMaddEntryOpen, ITEMsetAddEntryOpen] = useState(false);
  const [empolyees, setEmployees] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  //these are state flags to trigger an upate on the employee and categores list when and entity is created or deleted. 
  //inserting the employee and categoryData list directly into the dependency array cause an infifnite loop.
  const [employeeStateFlag, setEmployeesStateFlag] = useState(0);
  const [categoriesStateFlag, setCategoriesStateFlag] = useState(0);

  useEffect(()=>{
    
    async function getEmployees(){
      var data = await getAllEmployees();
      console.log(data)
      if(data){
        setEmployees(data);
      }
    }
    async function getCategories(){
      var data = await getAllCategories();
      console.log(data);
      if(data){
        setCategoryData(data);
      }
    }
    getEmployees();
    getCategories();
  },[ employeeStateFlag, categoriesStateFlag]) 

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

  const handldAddEmployee = async (empolyee) => {
    await addEmployee(empolyee);
    setEmployeesStateFlag((state) => state + 1);
  }

  const handleAddCategory = async (category) => {
    await addCategory(category);
    setCategoriesStateFlag((state) => state + 1)
  }

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    setCategoriesStateFlag((state) => state + 1);
  }

  const handleDeleteEmployee = async (id) => {
    await deleteEmployee(id);
    setEmployeesStateFlag((state) => state + 1);
  }

  const handleUpdateSalary = async (id,salary) => {
    var raise = salary + 1000;
    console.log(raise)
    await updateSalary(id, raise);
    setEmployeesStateFlag((state) => state + 1);
  }

  return (
    <>
      <div className="centerBox">
        <h1>Grocery Goblins</h1>

        <div className="entries">
          <div className="header">
            <h1>Employees:</h1>
            <button onClick={handleEntryAddClick}>+</button>
          </div>
          {empolyees.map((entry, index) => {
              return <DatabaseEntry key={index} empolyee={entry} handleDeleteEmployee={handleDeleteEmployee} handleAddEmployee={handldAddEmployee} handleUpdateSalary={handleUpdateSalary}/>
            })}

        </div>
        <div className="Itementries">
          <div className="header">
            <h1>Items:</h1>
            <button onClick={ITEMhandleEntryAddClick}>+</button>
          </div>
          
          {categoryData.map((entry, index) => {
              return <CategoryEntry key={index} category={entry} handleDeleteCategory={handleDeleteCategory} />
            })}
        </div>
      </div>
      {/* adding entity functionality */}
      {addEntryOpen && <AddEntry closeAddJob={handleEntryAddClose} handldAddEmployee={handldAddEmployee}/>}
      {ITEMaddEntryOpen && <ITEMAddEntry closeAddJob={ITEMhandleEntryAddClose} handleAddCategory={handleAddCategory}/>}

    </>
  );
}

export default App;
