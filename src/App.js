import { Switch, Route } from "react-router";
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { ProfileProvider } from "./context/profile.context";
import Start from "../src/pages/Start";
import PageNotFound from "./pages/PageNotFound";
import Result from "../src/pages/Result";
import { useState } from "react";
import Quiz from "../src/pages/Quiz";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestion = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}&difficulty=medium&type=multiple`
    );
    console.log(data);
    console.log(category);
    console.log(difficulty);
  };
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
          <Start name={name} setName={setName} fetchQuestion={fetchQuestion} />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
