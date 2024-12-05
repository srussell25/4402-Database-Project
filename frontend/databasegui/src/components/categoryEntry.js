import trashIcon from "./trash-xmark.png";

export default function CategoryEntry({ category_Id, name, handleDelete }) {
  //console.log("Props in CategoryEntry:", props); // Inspect props

  return (
    <>
      <div className="entryArea">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h2>{name}</h2>
          <h2>ID:{category_Id} </h2>
          <img
            onClick={() => handleDelete(category_Id)}
            src={trashIcon}
            alt="Delete Entry"
          ></img>
        </div>
      </div>
    </>
  );
}
