import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ThemeUPLIFT from './styles/ThemeUPLIFT';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Navigation } from 'routers/Navigator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeUPLIFT>
      <Navigation />
    </ThemeUPLIFT>
  </Provider>
);

reportWebVitals();
