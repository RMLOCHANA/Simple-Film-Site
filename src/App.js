import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Header from './components/Header';
import MyList from './pages/MyList';
// import CounterClass from './components/counterClass';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/MyList" element={<MyList />} />
      </Routes>
    </div>

  );
}

export default App;
