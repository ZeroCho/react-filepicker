import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilestack from './ReactFilestack';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <ReactFilestack apiKey={'Your App Key'}/>,
    rootNode
  );
});
