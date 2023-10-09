import { Switch, Route } from "react-router";
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { ProfileProvider } from "./context/profile.context";
import Start from "../src/pages/Start";
import PageNotFound from "./pages/PageNotFound";
import Result from '../src/pages/Result';
function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
