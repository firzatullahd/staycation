import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './assets/scss/style.scss';
// import InputNumber from './element/Form/InputNumber/InputNumber'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
      {/* <InputNumber /> */}
    </div>
  );
}

export default App;
