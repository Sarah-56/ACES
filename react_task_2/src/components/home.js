import React from "react";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
function Home({n, setNote, notes, history, location, match}){
    return(
        <div>
            <h2>Home</h2>
            {/* <Link to="/ourtodo">My todo list</Link> */}
            <Button variant="outlined"
                onClick={() => {history.push("/ourtodo")}}
            >My todo list</Button>
            <Button variant="outlined"
                onClick={() => {history.push("/about")}}
            >About</Button>

            
        </div>
    )
}

export default Home;