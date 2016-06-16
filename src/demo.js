import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilestack from './ReactFilestack';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  var apiKey = 'Your App Key';
  ReactDOM.render(
    <div>
      <ReactFilestack apiKey={apiKey} />
      <ReactFilestack apiKey={apiKey} defaultWidget={false} />
    </div>,
    rootNode
  );
});
