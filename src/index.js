import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ControlledComponent} from "./Components/ControlledComponent";
import {UncontrolledComponent} from "./Components/UncontrolledComponent";
import {FileInput} from "./Components/FileInput";
import {FunctionComponentINSIDE} from "./Components/FunctionComponentINSIDE"
import {ReactLazy} from "./ReactLazy/ReactLazy";
import {ReactLazyOther} from "./ReactLazy/ReactLazyOther";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <br/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <App/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <FileInput/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <UncontrolledComponent/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <ControlledComponent/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <FunctionComponentINSIDE/>
        <a>-------------------------------------------------------------</a>
        <br/>
        <div id="display-block">
            <div id="child">
                    <div><ReactLazy/></div>
            </div>
            <div id="child">
                    <div><ReactLazyOther/></div>
            </div>
        </div>
        <br/>

    </React.StrictMode>
);

reportWebVitals();
