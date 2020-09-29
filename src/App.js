import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
//import AllCourse from './components/AllCourse';
import AddCourse from './components/AddCourse';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//https://www.youtube.com/watch?v=TjnWtDWFZFc&t=2980s youtube project link

function App() {
  // const btnHandle = () => {
  //   toast("This is my first toast container");
  // }
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <switch>
          <Route path="/" component={Home} exact />
          <Route path="/add-course" component={AddCourse} />
        </switch>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
          <Button color="primary" outline onClick={btnHandle}>Toast Container</Button>
          
          </div>

        </header> */}
      </Router>
    </div>
  );
}

export default App;
