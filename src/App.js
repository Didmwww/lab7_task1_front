import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <Content />
      <Image />
    </div>
  );
}

export default App;