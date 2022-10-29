import { Route, Switch } from "react-router-dom";
import "./App.css";
import Bell from "./components/Bell";
import ButtonTabs from "./components/ButtonTabs";
import Cards from "./components/Cards";
import Circle from "./components/Circle";
import DayOne from "./components/DayOne";
import Home from "./components/Home";
import ImageUpload from "./components/ImageUpload";
import List from "./components/List";
import LoginForm from "./components/LoginForm";
import NewFrom from "./components/NewFrom";
import Notifications from "./components/Notifications";
import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";
import PushNavLink from "./components/PushNavLink";
import SignInForm from "./components/SignInForm";
import Stars from "./components/Stars";
import UseMemo from "./components/UseMemo";

function App() {
  const isSignUpValue = localStorage.getItem("isSignup");
  console.log(isSignUpValue, "isSignUpValue");
  return (
    <>
      <div className="App">
        {/* <Circle /> */}
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center">
            <Bell /> <PushNavLink />
            <Route exact path="/new/:id" component={ButtonTabs} />
          </div>
          <Switch>
            {isSignUpValue === "true" ? (
              <>
                <Route exact path="/rating" component={Stars} />
                <Route exact path="/form" component={NewFrom} />
                <Route exact path="/page-two" component={PageTwo} />
                <Route exact path="/page-three" component={PageThree} />
                <Route exact path="/" component={Home} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/sign-in" component={SignInForm} />
                <Route exact path="/list" component={List} />
                <Route exact path="/cards" component={Cards} />
                <Route exact path="/image-upload" component={ImageUpload} />
              </>
            ) : (
              <>
                <Route exact path="/sign-up" component={DayOne} />
                <Route exact path="/" component={DayOne} />
                <Route exact path="/log-in" component={LoginForm} />
              </>
            )}
            {/* <Route exact path="/use-memo" component={UseMemo} /> */}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
