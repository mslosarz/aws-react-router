import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';
import {FIRST_PAGE, SECOND_PAGE, THIRD_PAGE} from './Links';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/">
                  <Route index element={<App />}/>
                  <Route path={FIRST_PAGE} element={<Menu/>}/>
                  <Route path={SECOND_PAGE} element={<Menu/>}/>
                  <Route path={THIRD_PAGE} element={<Menu/>}/>
                  <Route path="*" element={<h1>404</h1>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
