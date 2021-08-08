//create functional components
import React from "react";
import Header from "./components/header";
import List from "./components/list";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App(){
  const classes = useStyles();
  const[input, setInput] = React.useState();
  const[note, setNote] = React.useState([]);

  return(
    <div>
      <Header />
      <div style={{display:"flex"}}> 
      <form className={classes.root} noValidate autoComplete="off">
        <TextField value={input} 
        onChange={(e)=>setInput(e.target.value)} id="standard-basic" label="Enter your Todo here" />
      </form>
        <IconButton aria-label="add" onClick={()=>setNote([...note,{title: input}])}>
          <Add />
        </IconButton>
      </div>
      <div>
        <List note = {note} setNote={setNote} note={note}/>
      </div>
    </div>
  )
}

export default App;