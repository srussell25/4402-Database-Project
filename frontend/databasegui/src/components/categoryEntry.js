import { useEffect, useState } from 'react';
import trashIcon from "./trash-xmark.png"

export default function CategoryEntry( props ) {
    //console.log("Props in CategoryEntry:", props); // Inspect props

    const [entryName, setEntryName] = useState("Example");
    const [ID, setID] = useState(0);
    useEffect(()=>{
        if(props){
            setID(props.category_Id);
            setEntryName(props.name);
        }
    },[props])

 
    function handleDelete() {
        fetch(`http://localhost:3001/api/deleteCategory/${ID}`, {
            method: 'DELETE'
        })   
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();})
        .catch(error => console.error('Error fetching data:', error));
    }
        
    return (
        <>
            <div className="entryArea">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <h2>{entryName}</h2>
                    <h2>ID:{ID}  </h2>
                    <img onClick={handleDelete} src={trashIcon} alt="Delete Entry"></img>
                </div>
            </div>

        </>
    )
}