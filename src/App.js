import { Route, Switch } from "react-router-dom";
import "./App.css";
import ButtonTabs from "./components/ButtonTabs";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/new/:id" component={ButtonTabs} />
        </Switch>
      </div>
    </>
  );
}

export default App;
