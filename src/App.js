import logo from './logo.svg';
import './App.css';
import Users from './users';

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users myname="test" />
      </header>
    </div>
  );
}

export default App;
