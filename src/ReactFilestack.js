import React, { Component, PropTypes } from 'react';
class ReactFilestack extends Component {
  constructor(props) {
    super(props);
    this.onClickPick = this.onClickPick.bind(this);
  }

  componentDidMount() {
    const { apiKey, buttonText, buttonClass, onFileUploaded, options } = this.props;
    const button = this.refs.fpButton;
    if (!button) {
      const element = this.refs.target;
      element.type = 'filepicker';
      element.setAttribute('data-fp-apikey', apiKey);
      element.setAttribute('data-fp-button-text', buttonText || 'Pick File');
      element.setAttribute('data-fp-button-class', buttonClass || 'fp__btn');
      element.onchange = function (e) {
        if (typeof onFileUploaded === 'function') {
          onFileUploaded(e.fpfile);
        } else {
          console.log(JSON.stringify(e.fpfile));
        }
      };
      filepicker.constructWidget(element);
      element.type = '';
    }
  }

  onClickPick(e) {
    const { apiKey, onFileUploaded, options } = this.props;
    e.preventDefault();
    e.stopPropagation();
    filepicker.setKey(apiKey);
    filepicker.pick(function (Blob) {
      if (typeof onFileUploaded === 'function') {
        onFileUploaded(Blob);
      } else {
        console.log(JSON.stringify(Blob));
      }
    });
  }

  render() {
    const { defaultWidget, buttonClass, buttonText } = this.props;
    if (defaultWidget) {
      return (
        <input ref="target" />
      )
    } else {
      return (
        <button name="filestack" ref="fpButton" onClick={this.onClickPick}
                className={buttonClass}>{buttonText}</button>
      )
    }
  }
}

ReactFilestack.defaultProps = {
  defaultWidget: true,
  buttonText: 'Pick File',
  options: {
    container: 'modal',
    language: 'en',
    webcam: {
      videoRes: '640x480',
      audioLen: '3600',
      vidioLen: '3600'
    },
    backgroundUpload: true,
    hide: false,
    imageQuality: 100,
    cropForce: false,
  }
};

ReactFilestack.propTypes = {
  options: PropTypes.shape({
    mimetype: PropTypes.string,
    mimetypes: PropTypes.arrayOf(PropTypes.string),
    extension: PropTypes.string,
    extensions: PropTypes.arrayOf(PropTypes.string),
    maxSize: PropTypes.number,
    container: PropTypes.string,
    language: PropTypes.string,
    service: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.string),
    openTo: PropTypes.string,
    webcamDim: PropTypes.arrayOf(PropTypes.number),
    webcam: PropTypes.shape({
      videoRes: PropTypes.string,
      audioLen: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      videoLen: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    customSourceContainer: PropTypes.string,
    customSourcePath: PropTypes.string,
    debug: PropTypes.bool,
    policy: PropTypes.string,
    signature: PropTypes.string,
    backgroundUpload: PropTypes.bool,
    hide: PropTypes.bool,
    customCss: PropTypes.string,
    customText: PropTypes.string,
    imageQuality: PropTypes.number,
    imageDim: PropTypes.arrayOf(PropTypes.number),
    imageMax: PropTypes.arrayOf(PropTypes.number),
    imageMin: PropTypes.arrayOf(PropTypes.number),
    conversions: PropTypes.arrayOf(PropTypes.string),
    cropRatio: PropTypes.number,
    cropDim: PropTypes.arrayOf(PropTypes.number),
    cropMax: PropTypes.arrayOf(PropTypes.number),
    cropMin: PropTypes.arrayOf(PropTypes.number),
    cropForce: PropTypes.bool,
  }),
  apiKey: PropTypes.string.isRequired,
  defaultWidget: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  onFileUploaded: PropTypes.func,
};

export default ReactFilestack;
