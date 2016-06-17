import React, { Component, PropTypes } from 'react';
import applyOptions from './options';
class ReactFilestack extends Component {
  constructor(props) {
    super(props);
    this.onClickPick = this.onClickPick.bind(this);
    this.checkDeprecatedProps = this.checkDeprecatedProps.bind(this);
  }

  checkDeprecatedProps() {
    const { apiKey, buttonText, buttonClass } = this.props;
    if (apiKey || buttonText || buttonClass) {
      console.error('ReactFilestack: You are using deprecated props. One or some of [apiKey, buttonText, buttonClass]. Change these to [apikey, options.buttonText, options.buttonClass]');
    }
  }

  componentDidMount() {
    const { apikey, buttonText, buttonClass, onFileUploaded, options, mode } = this.props;
    const button = this.refs.fpButton;
    this.checkDeprecatedProps();
    if (!button) { // if using default widget
      const element = this.refs.target;
      if (mode === 'crop') {
        element.type = 'filepicker-convert';
      } else if (mode === 'dragdrop') {
        element.type = 'filepicker-dragdrop';
      } else {
        element.type = 'filepicker';
      }
      applyOptions(element, options, mode);
      element.setAttribute('data-fp-apikey', apikey);
      element.setAttribute('data-fp-button-text', buttonText || options.buttonText || 'Pick File');
      element.setAttribute('data-fp-button-class', buttonClass || options.buttonClass || 'fp__btn');
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
    const { apikey, onFileUploaded, options } = this.props;
    const callback = (Blob) => {
      if (typeof onFileUploaded === 'function') {
        onFileUploaded(Blob);
      } else {
        console.log(JSON.stringify(Blob));
      }
    };
    e.preventDefault();
    e.stopPropagation();
    filepicker.setKey(apikey);
    if (options.multiple) {
      filepicker.pickMultiple(options, callback);
    } else {
      filepicker.pick(options, callback);
    }
  }

  render() {
    const { defaultWidget, buttonClass, buttonText, options } = this.props;
    if (defaultWidget) {
      return (
        <input ref="target" />
      )
    } else {
      return (
        <button
          name="filestack"
          ref="fpButton"
          onClick={this.onClickPick}
          className={buttonClass || options.buttonClass}
        >
          {buttonText || options.buttonText}
        </button>
      )
    }
  }
}

ReactFilestack.defaultProps = {
  defaultWidget: true,
  mode: 'pick',
  options: {
    folders: false,
    buttonText: 'Pick File',
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
    url: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    mimetype: PropTypes.string,
    mimetypes: PropTypes.arrayOf(PropTypes.string),
    extension: PropTypes.string,
    extensions: PropTypes.arrayOf(PropTypes.string),
    maxSize: PropTypes.number,
    maxFiles: PropTypes.number,
    folders: PropTypes.bool,
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
  apikey: PropTypes.string.isRequired,
  defaultWidget: PropTypes.bool,
  mode: PropTypes.string,
  apiKey: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  onFilesUploaded: PropTypes.func,
  onFileUploaded: PropTypes.func,
};

export default ReactFilestack;
