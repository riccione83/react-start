import "./App.css";
import { Provider } from "react-redux";
import HomeScreen from "./scenes/Home";
import store from "./store/store";
import { Switch, Route, Router } from "react-router";
import { createBrowserHistory } from "history";
import LoginScreen from "./scenes/Login";

const history = createBrowserHistory({
  basename: "",
  forceRefresh: false,
  keyLength: 6,
});

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
