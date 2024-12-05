import { useState } from 'react';
export default function ITEMAddEntry({ closeAddJob, handleAddCategory }) {

    const [entryName, setEntryName] = useState("");

    function handleEntrySubmit(event) {
        event.preventDefault(); // Prevent form from reloading the page
        var category = {
            name: entryName
        }
        handleAddCategory(category);
        closeAddJob();
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
                <button type="submit">Create Entry</button>
                <button type="button" onClick={closeAddJob}>Cancel</button>
            </form>
        </div>
    );
}