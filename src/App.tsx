import "./App.css";
import { Provider } from "react-redux";
import HomeScreen from "./scenes/Home";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
