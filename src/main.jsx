import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import 'modern-normalize';
import App from './components/App';
import './index.css';
// 1. Імпортуємо провайдер
import { Provider } from 'react-redux';
// 2. Імпортуємо створений раніше стор
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
