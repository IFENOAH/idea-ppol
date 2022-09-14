import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './routes/auth/signup';
import NotFound from './routes/auth/404';
import LogIn from './routes/auth/login';
import Ideas from './routes/pages/idea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <App />}>
        <Route index element={<SignUp />} />
        <Route path = '/auth/log-in' element={<LogIn />} />
        <Route path = '/ideas' element={<Ideas /> } />

        <Route path = '*' element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
