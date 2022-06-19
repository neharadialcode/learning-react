import { Route, Switch } from "react-router-dom";
import "./App.css";
import ButtonTabs from "./components/ButtonTabs";
import Home from "./components/Home";
import PageOne from "./components/PageOne";
import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";
import PushNavLink from "./components/PushNavLink";
import TabsNavLinks from "./components/TabsNavLinks";

function App() {
  return (
    <>
      <div className="App">
        <div className="d-flex">
          {/* <TabsNavLinks /> */}
          <PushNavLink />
          <Switch>
            <Route exact path="/new/:id" component={ButtonTabs} />
            <Route exact path="/page-one" component={PageOne} />
            <Route exact path="/page-two" component={PageTwo} />
            <Route exact path="/page-three" component={PageThree} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
