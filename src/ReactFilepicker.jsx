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
        vidioLen: '3600',
      },
      backgroundUpload: true,
      hide: false,
      imageQuality: 100,
      cropForce: false,
    },
  };

  static propTypes = {
    blob: PropTypes.object,
    input: PropTypes.any,
    apikey: PropTypes.string.isRequired,
    defaultWidget: PropTypes.bool,
    link: PropTypes.bool,
    mode: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onProgress: PropTypes.func,
    options: PropTypes.shape({
      url: PropTypes.string,
      filename: PropTypes.string,
      suggestedFilename: PropTypes.string,
      buttonText: PropTypes.string,
      buttonClass: PropTypes.string,
      mimetype: PropTypes.string,
      mimetypes: PropTypes.arrayOf(PropTypes.string),
      extension: PropTypes.string,
      extensions: PropTypes.arrayOf(PropTypes.string),
      multiple: PropTypes.bool,
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
      storeContainer: PropTypes.string,
      access: PropTypes.string,
      base64encode: PropTypes.bool,
      base64decode: PropTypes.bool,
      asText: PropTypes.bool,
      cache: PropTypes.bool,
      uploaded: PropTypes.bool,
      writeable: PropTypes.bool,
      md5: PropTypes.bool,
    }),
  };

  componentDidMount() {
    const filepicker = require('filepicker-js');

    const { apikey, buttonText, buttonClass, onSuccess, options, mode } = this.props;
    const custom = this.fpButton;
    if (!custom) { // if using default widget
      const element = this.target;
      if (mode === 'dragdrop') {
        element.setAttribute('type', 'filepicker-dragdrop');
      } else if (mode === 'pickMultiple') {
        options.multiple = true;
      }
      applyOptions(element, options, mode);
      element.setAttribute('data-fp-apikey', apikey);
      element.setAttribute('data-fp-button-text', buttonText || options.buttonText || 'Pick File');
      element.setAttribute('data-fp-button-class', buttonClass || options.buttonClass || 'fp__btn');
      element.onchange = (e) => {
        if (typeof onSuccess === 'function') {
          onSuccess(e.fpfile);
        } else {
          console.log(e.fpfile);
        }
      };
      filepicker.constructWidget(element);
      element.setAttribute('type', '');
    }
  }

  onClickPick = (e) => {
    const filepicker = require('filepicker-js');

    e.stopPropagation();
    e.preventDefault();
    const { apikey, onSuccess, onError, onProgress, options, mode, blob, input } = this.props;
    const onFinished = (result) => {
      if (typeof onSuccess === 'function') {
        onSuccess(result);
      } else {
        console.log(result);
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
    filepicker.setKey(apikey);
    if (mode === 'export') {
      filepicker.exportFile(blob || options.url, options, onFinished, onFail, onUploading);
    } else if (mode === 'convert') {
      filepicker.convert(blob, options, options, onFinished, onFail, onUploading);
    } else if (mode === 'pickAndStore') {
      filepicker.pickAndStore(options, options, onFinished, onFail, onUploading);
    } else if (mode === 'pickMultiple' || options.multiple) {
      filepicker.pickMultiple(options, onFinished, onFail, onUploading);
    } else if (mode === 'read') {
      filepicker.read(input || options.url, options, onFinished, onError, onUploading);
    } else if (mode === 'store') {
      filepicker.store(input, options, onFinished, onError, onUploading);
    } else if (mode === 'storeUrl') {
      filepicker.storeUrl(options.url, options, onFinished, onError, onUploading);
    } else if (mode === 'stat') {
      filepicker.stat(blob, options, onFinished, onError);
    } else if (mode === 'write') {
      filepicker.write(blob, input, options, onFinished, onError, onUploading);
    } else if (mode === 'writeUrl') {
      filepicker.writeUrl(blob, options.url, options, onFinished, onError, onUploading);
    } else {
      filepicker.pick(options, onFinished, onFail, onUploading);
    }
  };

  render() {
    const { defaultWidget, buttonClass, buttonText, link, options } = this.props;
    if (defaultWidget) {
      return (
        <input
          ref={(c) => {
            this.target = c;
          }}
          type="filepicker"
        />
      );
    }
    const Tag = link ? 'a' : 'button';
    return (
      <Tag
        name="filepicker"
        ref={(c) => {
          this.fpButton = c;
        }}
        onClick={this.onClickPick}
        className={buttonClass || options.buttonClass}
      >
        {buttonText || options.buttonText}
      </Tag>
    );
  }
}

export default ReactFilepicker;
