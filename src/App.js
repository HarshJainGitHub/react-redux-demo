import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>  
      <div className="app">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
