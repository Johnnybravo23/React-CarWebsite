import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// imports
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Navbar />
        <Header />
        <Skills />
    </Router>, 
    document.getElementById('root'));
serviceWorker.unregister();
