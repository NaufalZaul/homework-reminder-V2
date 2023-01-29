// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/home';
import { BrowserRouter as Router, Route, Switch as Routes } from 'react-router-dom';
import Create from './Component/Menu/Create';
import Deadline from './Component/Menu/Deadline';
import History from './Component/Menu/History';
import Running from './Component/Menu/Running';
import Navbar from './Component/utils/Navbar';


function App() {
  return (
    <div className="App relative">
      <Router>
        <Routes>
          <Route path='/' exact>
            <Navbar />
            <Create />
          </Route>
          <Route path='/create'>
            <Navbar />
            <Create />
          </Route>
          <Route path='/running'>
            <Navbar />
            <Running />
          </Route>
          <Route path='/deadline'>
            <Navbar />
            <Deadline />
          </Route>
          <Route path='/history'>
            <Navbar />
            <History />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
