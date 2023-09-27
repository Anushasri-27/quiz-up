import { Switch, Route } from "react-router";
import 'rsuite/dist/styles/rsuite-default.css';
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { ProfileProvider } from "./context/profile.context";

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
      </Switch>
    </ProfileProvider>
  );
}

export default App;
