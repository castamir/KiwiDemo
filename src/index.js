import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import KiwiDemo from "./KiwiDemo";

ReactDOM.render(<KiwiDemo />, document.getElementById('root'));
registerServiceWorker();
