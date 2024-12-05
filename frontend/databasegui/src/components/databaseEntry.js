import { useEffect, useState } from 'react';
import trashIcon from "./trash-xmark.png"

export default function DatabaseEntry( {empolyee, handleDeleteEmployee, handleUpdateSalary} ) {
   
    return (
        <>
            <div className="entryArea">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                    {empolyee && (
                        <>
                        <h2>{empolyee.name}</h2>
                        <h2>ID:{empolyee.ID}  </h2>
                        <h2>Salary:{empolyee.salary}
                            <button style={{marginLeft: 5}} onClick={() => handleUpdateSalary(empolyee.ID, empolyee.salary)}>Add Raise</button>
                        </h2>
                        <img onClick={() => handleDeleteEmployee(empolyee.ID)} src={trashIcon} alt="Delete Entry"></img>
                        </>
                    )}
                   
                </div>
            </div>

        </>
    )
}