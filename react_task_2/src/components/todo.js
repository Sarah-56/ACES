import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowRight, Delete } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });

function Todo({n, setNote, notes}){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <div>
                <Card className={classes.root} style={{display:"flex"}}>
            <CardContent>
            <Typography variant="body2" component="p">
            {n}
            </Typography>
        </CardContent>
        <CardActions>
        <IconButton aria-label="delete" onClick={()=>{setNote((old)=>old.filter((note) => note.title !== n));}}>
            <Delete />
            </IconButton>
        </CardActions>
        </Card>
        </div>
    )
}

export default Todo;