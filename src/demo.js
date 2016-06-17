import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilestack from './ReactFilestack';
import styles from './demo.css';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  var apikey = 'Acu94EFL1STGYvkM6a8usz';
  var dragDropOptions = {
    buttonText: 'I can handle drag&drop!',
    multiple: true,
    mimetype: 'image/*',
    container: 'window',
    webcamDim: [1280, 720],
    webcam: {
      videoRes: '1280x720'
    },
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
  };
  var cropOptions = {
    buttonText: 'Crop It',
    url: 'https://www.filestackapi.com/api/file/lQ9LalJTKmuou4WSw9LM',
  };
  var customOptions = {
    buttonText: `I'm customized`,
    buttonClass: styles.customButton,
    multiple: true,
    mimetype: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
  };
  var callback = function(fpfiles) {
    console.log('fpfiles', fpfiles);
  };
  ReactDOM.render(
    <div>
      <form>
        <div>DefaultWidget</div>
        <ReactFilestack apikey={apikey} />
      </form>
      <form>
        <div>Drag&Drop Widget with custom options and Callback</div>
        <ReactFilestack apikey={apikey} mode="dragdrop" options={dragDropOptions} onFileUploaded={callback}/>
      </form>
      <form>
        <div>Crop Widget with custom options Callback</div>
        <ReactFilestack apikey={apikey} mode="crop" options={cropOptions} onFileUploaded={callback}/>
        <div>Not working well. I need to inspect what happens.</div>
      </form>
      <form>
        <div>Custom button(You can put className on the button to style)</div>
        <ReactFilestack apikey={apikey} defaultWidget={false} onFileUploaded={callback} />
      </form>
      <form>
        <div>Custom button with custom options and custom styles</div>
        <ReactFilestack apikey={apikey} defaultWidget={false} options={customOptions} onFileUploaded={callback} />
      </form>
    </div>,
    rootNode
  );
});
