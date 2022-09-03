import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/Home';
import { createStore } from "redux"
import { Provider } from "react-redux";
import rootReducer from "./services/reducers"

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HomeContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
