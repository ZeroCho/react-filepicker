import React, { Component, PropTypes } from 'react';
import applyOptions from './options';
class ReactFilepicker extends Component {
  static defaultProps = {
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

  static propTypes = {
    blob: PropTypes.object,
    apikey: PropTypes.string.isRequired,
    defaultWidget: PropTypes.bool,
    mode: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onProgress: PropTypes.func,
    options: PropTypes.shape({
      url: PropTypes.string,
      suggestedFilename: PropTypes.string,
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
      width: PropTypes.number,
      height: PropTypes.number,
      fit: PropTypes.oneOf(['clip', 'crop', 'scale', 'max']),
      align: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'faces']),
      crop: PropTypes.arrayOf(PropTypes.number),
      crop_first: PropTypes.bool,
      format: PropTypes.string,
      filter: PropTypes.oneOf(['blur', 'sharpen']),
      compress: PropTypes.bool,
      quality: PropTypes.number,
      rotate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      watermark: PropTypes.string,
      watermark_position: PropTypes.string,
      watermark_size: PropTypes.number,
      location: PropTypes.string,
      path: PropTypes.string,
      storeRegion: PropTypes.string,
      access: PropTypes.string,
    }),
  };

  componentDidMount() {
    const { apikey, buttonText, buttonClass, onSuccess, options, mode } = this.props;
    const button = this.refs.fpButton;
    if (!button) { // if using default widget
      const element = this.refs.target;
      if (mode === 'dragdrop') {
        element.setAttribute('type', 'filepicker-dragdrop');
      }
      applyOptions(element, options, mode);
      element.setAttribute('data-fp-apikey', apikey);
      element.setAttribute('data-fp-button-text', buttonText || options.buttonText || 'Pick File');
      element.setAttribute('data-fp-button-class', buttonClass || options.buttonClass || 'fp__btn');
      element.onchange = function (e) {
        if (typeof onSuccess === 'function') {
          onSuccess(e.fpfile);
        } else {
          console.log(e.fpfile);
        }
      };
      if (typeof window !== 'undefined') {
        filepicker.constructWidget(element);
        element.setAttribute('type', '');
      }
    }
  }

  onClickPick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { apikey, onSuccess, onError, onProgress, options, mode, blob } = this.props;
    const onFinished = (blob) => {
      if (typeof onSuccess === 'function') {
        onSuccess(blob);
      } else {
        console.log(blob);
      }
    };
    const onFail = (error) => {
      if (typeof onError === 'function') {
        onError(error);
      } else {
        console.error(error);
      }
    };
    const onUploading = (progress) => {
      if (typeof onProgress === 'function') {
        onProgress(progress);
      } else {
        console.log(progress);
      }
    };
    if (typeof window !== 'undefined') {
      filepicker.setKey(apikey);
      if (mode === 'export') {
        filepicker.exportFile(blob || options.url, options, onFinished, onFail, onUploading);
      } else if (mode === 'convert') {
        filepicker.convert(blob, options, options, onFinished, onFail, onUploading);
      } else if (mode === 'pickAndStore') {
        filepicker.pickAndStore(options, options, onFinished, onFail, onUploading);
      } else if (options.multiple) {
        filepicker.pickMultiple(options, onFinished, onFail, onUploading);
      } else {
        filepicker.pick(options, onFinished, onFail, onUploading);
      }
    }
  };

  render() {
    const { defaultWidget, buttonClass, buttonText, options } = this.props;
    if (defaultWidget) {
      return (
        <input ref="target" type="filepicker" />
      )
    }
    return (
      <button
        name="filepicker"
        ref="fpButton"
        onClick={this.onClickPick}
        className={buttonClass || options.buttonClass}
      >
        {buttonText || options.buttonText}
      </button>
    )
  }
}

export default ReactFilepicker;
