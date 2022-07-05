import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom/client';
// стили
import 'bootstrap/dist/css/bootstrap.min.css'
// компонент
import { App } from './app';
// небольшая корректировка "бутстраповских" стилей
const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
