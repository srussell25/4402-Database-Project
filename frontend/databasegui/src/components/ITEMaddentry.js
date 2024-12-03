import { useState } from 'react';
export default function ITEMAddEntry({ closeAddJob }) {

    const [entryName, setEntryName] = useState("");
    const [ID, setID] = useState(0);

    function handleEntrySubmit() {
        fetch(`http://localhost:3001/api/addCategory`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                name: entryName,
                ID: ID
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();})
        .catch(error => console.error('Error fetching data:', error));
    }


    return (
        <div className="addEntryScreen">
            <form onSubmit={handleEntrySubmit}>
                <h2>Add new category</h2>
                <label htmlFor="entryTitle">Name:</label>
                <input
                    type="text"
                    id="entryName"
                    value={entryName}
                    onChange={(e) => setEntryName(e.target.value)}
                    required
                />
                <label htmlFor="entryTitle"> ID:</label>
                <input
                    type="text"
                    id="entryName"
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                    required
                />
                <button type="submit">Create Entry</button>
                <button type="button" onClick={closeAddJob}>Cancel</button>
            </form>
        </div>
    );
}