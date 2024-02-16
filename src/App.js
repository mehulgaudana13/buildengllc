import './App.css';
import Home from './components/pages/Home';
import { store } from "./components/common/redux/store";
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
        </Provider>
    </div>
  );
}

export default App;
