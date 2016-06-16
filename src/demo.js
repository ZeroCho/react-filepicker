import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilestack from './ReactFilestack';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  var apiKey = 'Your App Key';
  ReactDOM.render(
    <div>
      <a href="https://github.com/zerocho/react-filestack">github link</a>
      <form>
        <div>DefaultWidget</div>
        <ReactFilestack apiKey={apiKey} buttonText="Pick!"/>
      </form>
      <br />
      <br />
      <form>
        <div>Custom button(You can put className on the button to style)</div>
        {/*<ReactFilestack apiKey={apiKey} defaultWidget={false} />*/}
      </form>
    </div>,
    rootNode
  );
});
