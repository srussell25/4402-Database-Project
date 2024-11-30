import { useState } from 'react';
export default function AddEntry({ closeAddJob }) {

    //This holds the input for the entry name. I assume we will need more fields, feel free to add more
    const [entryName, setEntryName] = useState("");

    function handleEntrySubmit() {
        //Put the database add logic here
    }


    return (
        <div className="addEntryScreen">
            <form onSubmit={handleEntrySubmit}>
                <h2>Add New Entry</h2>
                <label htmlFor="entryTitle">Entry name</label>
                <input
                    type="text"
                    id="entryName"
                    value={entryName}
                    onChange={(e) => setEntryName(e.target.value)}
                    required
                />
                <button type="submit">Create Entry</button>
                <button type="button" onClick={closeAddJob}>Cancel</button>
            </form>
        </div>
    );
}