import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
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
      <App />
    </Provider>
  </StrictMode>
);
