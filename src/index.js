import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./mainSection";
import Footer from "./Footer";
import Nav from "./Nav.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <div>
 
 <Nav/>
  <Main/>
  <Footer/>
   </div>
  </React.StrictMode>
);


