import "./App.css";
import { Provider } from "react-redux";
import HomeScreen from "./scenes/Home";
import initialStore from "./store/store";
import { Switch, Route, Router } from "react-router";
import { createBrowserHistory } from "history";
import LoginScreen from "./scenes/Login";
import { PersistGate } from "redux-persist/integration/react";

const history = createBrowserHistory({
  basename: "",
  forceRefresh: false,
  keyLength: 6,
});

const { store, persistor } = initialStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
