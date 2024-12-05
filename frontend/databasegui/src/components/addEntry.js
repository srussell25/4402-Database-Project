import { useState } from 'react';
export default function AddEntry({ closeAddJob, handldAddEmployee }) {

    //This holds the input for the entry name. I assume we will need more fields, feel free to add more
    const [entryName, setEntryName] = useState("");
    const [dob, setDob] = useState("");
    const [salary, setSalary] = useState(0);
    const [start_date, setStart_date] = useState("");
    const [role_name, setRole_name] = useState("");

    function handleEntrySubmit(event) {
        event.preventDefault(); // Prevent form from reloading the page
         var employee = {
            name: entryName,
            dob: dob,
            salary: salary,
            start_date: start_date,
            role_name: role_name,
         }
         console.log(employee);
         handldAddEmployee(employee);
         closeAddJob(); // Close the form after submission
    }


    return (
        <div className="addEntryScreen">
            <form onSubmit={handleEntrySubmit}>
                <h2>Add new employee</h2>
                <label htmlFor="entryTitle">Name:</label>
                <input
                    type="text"
                    id="entryName"
                    value={entryName}
                    onChange={(e) => setEntryName(e.target.value)}
                    required
                />
                <label htmlFor="entryTitle"> Birthday:</label>
                <input
                    type="text"
                    id="entryName"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <label htmlFor="entryTitle"> Salary:</label>
                <input
                    type="text"
                    id="entryName"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                />
                <label htmlFor="entryTitle"> Start Date:</label>
                <input
                    type="text"
                    id="entryName"
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                    required
                />
                <label htmlFor="entryTitle"> Role Name:</label>
                <input
                    type="text"
                    id="entryName"
                    value={role_name}
                    onChange={(e) => setRole_name(e.target.value)}
                    required
                />
                <button type="submit">Create Entry</button>
                <button type="button" onClick={closeAddJob}>Cancel</button>
            </form>
        </div>
    );
}