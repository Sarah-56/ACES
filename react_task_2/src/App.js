//create functional components
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OurTodo from "./ourtodo";
import Home from "./components/home";
import About from "./components/about";
import List from "./components/list";
function App(){
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ourtodo" exact component={OurTodo} />
        <Route path="/about" exact component={About} />
        <Route path="/" render={()=><h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;