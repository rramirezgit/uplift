import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';
import ThemeUPLIFT from './styles/ThemeUPLIFT';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeUPLIFT>
      <Landing />
    </ThemeUPLIFT>
  </React.StrictMode>,
);

reportWebVitals();
