import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import SignUp from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Login" element={<Signin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />

        {/*other routes*/}
      </Routes>
    </Router>
  );
}

export default App;
