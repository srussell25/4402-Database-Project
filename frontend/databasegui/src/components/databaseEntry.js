import { useState } from 'react';
import trashIcon from "./trash-xmark.png"

export default function DatabaseEntry() {
    const [entryName, setEntryName] = useState("Example");

    function handleDelete() {
        //put logic here that deletes the entry
    }
    return (
        <>
            <div className="entryArea">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <h2>{entryName}</h2>
                    <img onClick={handleDelete} src={trashIcon} alt="Delete Entry"></img>
                </div>
            </div>

        </>
    )
}