//create functional components
import React from "react";

var choosen = [];

function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  // return 'false' if color wasn't assigned
  return s.color !== '';// == strColor.toLowerCase();
}
function isUsed(strcolor){
  var used = false;
  if(choosen.pop() == strcolor){
    used = true;  
    console.log(choosen.pop()); 
    return true; 
  }
  else{
    choosen.push(strcolor);
    return false;
  }
}
function App(){
  const [color, setColor] = React.useState("");
  const [renderColor, setRenderColor] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  var valid; //boolean data type
  return(
    //warpper container
    <div>
      <input type="text" value={color} onChange={(event) => {
        setColor(event.target.value)}}/>
      <button onClick={() => {valid = isValidColor(color);
      if(valid != false){
        if(!isUsed(color)){
          setCounter(counter + 1);
          setRenderColor(color);
        }
      }
    }
    } > apply color </button>
      <div className = "colored-div" style={{ backgroundColor: renderColor }}></div>
      <h3>{counter}</h3>
    </div>
  )
}

export default App;