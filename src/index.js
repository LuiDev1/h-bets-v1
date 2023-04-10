import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTES
import Header from './components/header/Header'
import App from './App'
import Footer from './components/footer/Footer'

// CSS
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='page'>
      <header>
        <Header />
      </header>

      <main>
        <App />
      </main>

      <footer>
        <Footer />
      </footer>
    </div >
  </BrowserRouter>
);

