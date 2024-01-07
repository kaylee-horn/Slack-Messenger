import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Slack from './Slack.js';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Slack />);
}

export default App;
