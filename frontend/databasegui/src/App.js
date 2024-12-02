import logo from './logo.svg';
import './App.css';
import DatabaseEntry from './components/databaseEntry';
import AddEntry from './components/addEntry';
import { useState, useEffect } from 'react';


// const express = require('express');
// const db = require('../../../database/database');
// const queries = require('../../../database/queries');
// const app = express();
// app.use(express.json());

function App() {
  const [addEntryOpen, setAddEntryOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/api/employees')   
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  },[])


  const handleEntryAddClick = () => {
    setAddEntryOpen(true);
    fetch('http://localhost:3001/api/employees')   

      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  const handleEntryAddClose = () => {
    setAddEntryOpen(false);
    fetch('http://localhost:3001/api/categories')   

      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <>
      <div className="centerBox">
        <div className="header">
          <h1>Grocery Goblins</h1>
          <button onClick={handleEntryAddClick}>+</button>
        </div>

        <div className='entries'>
          {/*instead of <DatabaseEntry />, we can use a .map on an array of objects our database returns. */}
          {/* Probably also add some attributes to DatabaseEntry (such as its name or whatever)*/}
          {/* We are probably going to have to have different sections for different types of entries (such as employees or grocery items etc...*/}
          {/** I havent figured out a good solution for segmenting the categories. If you have any ideas lmk and ill think of some while im at work */}
          {data.map((entry) => {
             console.log("Entry:", entry);
              return <DatabaseEntry {...entry}/>
            })}
          {/* <DatabaseEntry /> */}
        </div>
      </div>
      {addEntryOpen && <AddEntry closeAddJob={handleEntryAddClose} />}
    </>
  );
}

export default App;
