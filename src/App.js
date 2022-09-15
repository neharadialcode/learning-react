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
import Stars from "./components/Stars";
import TabsNavLinks from "./components/TabsNavLinks";
import Form from "./components/Form";
import NewFrom from "./components/NewFrom";
import SignInForm from "./components/SignInForm";
import List from "./components/List";
import Cards from "./components/Cards";
import DayOne from "./components/DayOne";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <>
      <div className="App">
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center">
            <Bell />
            {/* <TabsNavLinks /> */}
            <PushNavLink />
            <Route exact path="/new/:id" component={ButtonTabs} />
          </div>

          <Switch>
            <Route exact path="/rating" component={Stars} />
            <Route exact path="/page-one" component={DayOne} />
            <Route exact path="/page-two" component={PageTwo} />
            <Route exact path="/page-three" component={PageThree} />
            <Route exact path="/" component={Home} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/form" component={NewFrom} />
            <Route exact path="/sign-in" component={SignInForm} />
            <Route exact path="/list" component={List} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/image-upload" component={ImageUpload} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
