import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Navbar from './components/shared/Navbar';
import NewPiece from './pages/NewPiece/NewPiece';

import './assets/css/site.css';
import PieceDetails from './pages/PieceDetails/PieceDetails';

const App = () => {
  const url = 'http://localhost:5020/api/v1/pieces'; 
  const [pieces, setPieces] = useState([]);
  
  useEffect(() => {
    const loadPieces = async () => {
      const { data } = await axios.get(url);
      setPieces(data);
    };
    loadPieces();
  }, []);
  
  const onAddPieceHandler = async (e) => {
    e.preventDefault();
    let pieceList = [];
    const newPiece = {
      title: e.target.title.value,
      published: e.target.published.value,
      composerFirstName: e.target.composerFirstName.value,
      composerLastName: e.target.composerLastName.value,
      language: e.target.language.value,
      setting: e.target.setting.value,
      quantity: e.target.quantity.value,
    };
    const { data } = await axios.post(url, newPiece);
    pieceList = [...pieces, data];
    setPieces(pieceList);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library pieces={pieces} />} />
        <Route
          path="/library/new"
          element={<NewPiece pieces={pieces} onAddPiece={onAddPieceHandler} />}
        />
        <Route path="/details" element={<PieceDetails />} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;
