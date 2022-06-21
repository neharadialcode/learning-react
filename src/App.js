import { Route, Switch } from "react-router-dom";
import "./App.css";
import Bell from "./components/Bell";
import ButtonTabs from "./components/ButtonTabs";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
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
          <Bell />
          <TabsNavLinks />
          {/* <PushNavLink /> */}
          <Switch>
            <Route exact path="/new/:id" component={ButtonTabs} />
            <Route exact path="/page-one" component={PageOne} />
            <Route exact path="/page-two" component={PageTwo} />
            <Route exact path="/page-three" component={PageThree} />
            <Route exact path="/" component={Home} />
            <Route exact path="/notifications" component={Notifications} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
