import trashIcon from "./trash-xmark.png";

export default function CategoryEntry( {category, handleDeleteCategory} ) {
    
    return (
        <>
            <div className="entryArea">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <h2>{category.name}</h2>
                    <h2>ID:{category.category_Id}</h2>
                    <img onClick={() => handleDeleteCategory(category.category_Id)} src={trashIcon} alt="Delete Entry"></img>
                </div>
            </div>

        </>
    )
}

