import React from 'react';
import ReactDOM from 'react-dom';
import ReactFilepicker from './ReactFilepicker';
import styles from './demo.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  const apikey = 'Acu94EFL1STGYvkM6a8usz';
  const dragDropOptions = {
    buttonText: 'I can handle drag&drop!',
    multiple: true,
    mimetype: 'image/*',
    container: 'window',
    webcamDim: [1280, 720],
    webcam: {
      videoRes: '1280x720',
    },
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP'],
  };
  const convertOptions = {
    width: 200,
    height: 200,
  };
  const customOptions = {
    buttonText: 'I\'m customized',
    buttonClass: styles.customButton,
    multiple: true,
    mimetype: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP'],
  };
  const blob = {
    url: 'https://www.filestackapi.com/api/file/9BWnyKPBQI23ukbT7sZA',
    filename: 'robot.png',
    mimetype: 'image/png',
    isWriteable: false,
    size: 28683,
  };
  const pickAndStoreOptions = {
    buttonText: 'PickAndStore',
    location: 'S3',
  };
  const exportOptions = {
    url: 'https://www.filestackapi.com/api/file/lQ9LalJTKmuou4WSw9LM',
    mimetype: 'image/png',
    buttonText: 'Export',
    suggestedFilename: 'newFile',
  };
  const callback = (fpfiles) => {
    console.log('fpfiles', fpfiles);
  };
  ReactDOM.render(
    <div>
      <form>
        <div>DefaultWidget</div>
        <ReactFilepicker apikey={apikey} />
      </form>
      <hr />
      <form>
        <div>Drag&Drop Widget with custom options and Callback</div>
        <ReactFilepicker apikey={apikey} mode="dragdrop" options={dragDropOptions} onSuccess={callback} />
      </form>
      <hr />
      <form>
        <div>Custom button(You can put className on the button to style)</div>
        <ReactFilepicker apikey={apikey} defaultWidget={false} onSuccess={callback} />
      </form>
      <hr />
      <form>
        <div>Custom link(You can put className on the link to style)</div>
        <ReactFilepicker apikey={apikey} link defaultWidget={false} onSuccess={callback} />
      </form>
      <hr />
      <form>
        <div>Multiple files upload</div>
        <ReactFilepicker apikey={apikey} mode="pickMultiple" onSuccess={callback} />
      </form>
      <hr />
      <form>
        <div>Custom button with custom options and custom styles</div>
        <ReactFilepicker apikey={apikey} defaultWidget={false} options={customOptions} onSuccess={callback} />
      </form>
      <hr />
      <form>
        <div>PickAndStore button</div>
        <ReactFilepicker
          apikey={apikey}
          mode="pickAndStore"
          defaultWidget={false}
          options={pickAndStoreOptions}
          onSuccess={callback}
        />
      </form>
      <hr />
      <form>
        <div>Export button</div>
        <ReactFilepicker
          apikey={apikey}
          mode="export"
          defaultWidget={false}
          options={exportOptions}
          onSuccess={callback}
        />
      </form>
      <hr />
      <form>
        <div>Convert button</div>
        <ReactFilepicker
          apikey={apikey}
          mode="convert"
          defaultWidget={false}
          blob={blob}
          options={convertOptions}
          onSuccess={callback}
          buttonText="Convert!"
        />
      </form>
    </div>,
    rootNode,
  );
});
