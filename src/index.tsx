import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes/Routes';
import { MoviesList } from './components/Movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MoviesList />
  </React.StrictMode>
);