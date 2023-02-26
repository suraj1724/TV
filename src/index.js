import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation } from './components/navigation';
import { Show } from './components/All_Shows';
import { ShowDetails } from './components/ShowDetails';
import { FinalIndex } from './components/FinalIndex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navigation/> */}
    {/* <ShowDetails/> */}
 <FinalIndex/>
    {/* <Show/> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
