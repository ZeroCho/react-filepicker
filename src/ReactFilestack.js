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
    filepicker.pick(function(Blob) {
      if (typeof onFileUploaded === 'function') {
        onFileUploaded(Blob);
      } else {
        console.log(JSON.stringify(Blob));
      }
    });
  }

  render() {
    if (this.props.defaultWidget) {
      return (
        <input ref="target" />
      )
    } else {
      return (
        <button name="filestack" ref="fpButton" onClick={this.onClickPick}
                className={this.props.buttonClass}>{this.props.buttonText}</button>
      )
    }
  }
}

ReactFilestack.defaultProps = {
  defaultWidget: true,
  buttonText: 'Pick File',
};

ReactFilestack.propTypes = {
  options: PropTypes.object,
  apiKey: PropTypes.string.isRequired,
  defaultWidget: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  onFileUploaded: PropTypes.func,
};

export default ReactFilestack;
