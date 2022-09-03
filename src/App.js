import './App.css';
import HomeContainer from './containers/Home';
import { createStore } from "redux"
import { Provider } from "react-redux";
import rootReducer from "./services/reducers"
import Header from './containers/Header';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
          <HomeContainer />
      </div>
    </Provider>
  );
}

export default App;
