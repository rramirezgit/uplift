import {createRoot} from 'react-dom/client';
import ThemeUPLIFT from './styles/ThemeUPLIFT';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Navigation } from './routers/Navigator';

window.onscroll = function() {
  console.log("Vertical: " + window.scrollY);
  console.log("Horizontal: " + window.scrollX);
};

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeUPLIFT>
      <Navigation />
    </ThemeUPLIFT>
  </Provider>
);

