// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
// import About from './About';
// import './index.css';

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/website/" element={<App />} />
      <Route path="/website/about" element={<About />} />
    </Routes>
  </Router>
);

