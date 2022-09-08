import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ControlledComponent} from "./Components/ControlledComponent";
import {UncontrolledComponent} from "./Components/UncontrolledComponent";
import {FileInput} from "./Components/FileInput";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <a>-------------------------------------------------------------</a>
      <FileInput />
      <a>-------------------------------------------------------------</a>
      <UncontrolledComponent />
      <a>-------------------------------------------------------------</a>
      <ControlledComponent />
  </React.StrictMode>
);

reportWebVitals();
