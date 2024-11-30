import logo from './logo.svg';
import './App.css';
import DatabaseEntry from './components/databaseEntry';
import AddEntry from './components/addEntry';
import { useState } from 'react';
function App() {
  const [addEntryOpen, setAddEntryOpen] = useState(false);
  const handleEntryAddClick = () => {
    setAddEntryOpen(true)
  }
  const handleEntryAddClose = () => {
    setAddEntryOpen(false)
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
          <DatabaseEntry />
        </div>
      </div>
      {addEntryOpen && <AddEntry closeAddJob={handleEntryAddClose} />}
    </>
  );
}

export default App;
