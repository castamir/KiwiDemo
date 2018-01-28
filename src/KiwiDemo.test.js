import React from 'react';
import ReactDOM from 'react-dom';
import KiwiDemo from "./KiwiDemo";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KiwiDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
