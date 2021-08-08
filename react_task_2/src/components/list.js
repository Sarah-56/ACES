import React from "react";
import Todo from "./todo"; 
function List({note, setNote, notes}){
    return(
        <div>
            {
                note.map(n=>(
                    <Todo n={n.title} setNote={setNote} notes={notes} />
                ))
            }
        </div>
    )
}

export default List;