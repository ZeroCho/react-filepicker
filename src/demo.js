import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilepicker from './ReactFilepicker';
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
  var convertOptions = {
    width: 200,
    height: 200,
  };
  var customOptions = {
    buttonText: `I'm customized`,
    buttonClass: styles.customButton,
    multiple: true,
    mimetype: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
  };
  var blob = {
    url: 'https://www.filestackapi.com/api/file/9BWnyKPBQI23ukbT7sZA',
    filename: 'robot.png',
    mimetype: 'image/png',
    isWriteable: false,
    size: 28683
  };
  var exportOptions = {
    url: 'https://www.filestackapi.com/api/file/lQ9LalJTKmuou4WSw9LM',
    mimetype: 'image/png',
    buttonText: 'Export',
    suggestedFilename: 'newFile',
  };
  var callback = function(fpfiles) {
    console.log('fpfiles', fpfiles);
  };
  ReactDOM.render(
    <div>
      <form>
        <div>DefaultWidget</div>
        <ReactFilepicker apikey={apikey} />
      </form>
      <form>
        <div>Drag&Drop Widget with custom options and Callback</div>
        <ReactFilepicker apikey={apikey} mode="dragdrop" options={dragDropOptions} onSuccess={callback}/>
      </form>
      <form>
        <div>Custom button(You can put className on the button to style)</div>
        <ReactFilepicker apikey={apikey} defaultWidget={false} onSuccess={callback} />
      </form>
      <form>
        <div>Custom button with custom options and custom styles</div>
        <ReactFilepicker apikey={apikey} defaultWidget={false} options={customOptions} onSuccess={callback} />
      </form>
      <form>
        <div>Export button</div>
        <ReactFilepicker apikey={apikey} mode="export" defaultWidget={false} options={exportOptions} onSuccess={callback} />
      </form>
      <form>
        <div>Convert button</div>
        <ReactFilepicker apikey={apikey} mode="convert" defaultWidget={false} blob={blob} options={convertOptions} onSuccess={callback} buttonText="Convert!"/>
      </form>
    </div>,
    rootNode
  );
});
