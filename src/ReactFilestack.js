import React, { Component, PropTypes } from 'react';
export default class ReactFilestack extends Component {
  constructor(props) {
    super(props);
    this.onClickPick = this.onClickPick.bind(this);
  }

  componentDidMount() {
    const button = document.getElementsByName('filestack')[0];
    if (!button) {
      const element = document.getElementById('constructed-widget');
      element.type = 'filepicker';
      element.setAttribute('data-fp-apikey', this.props.apiKey);
      element.setAttribute('data-fp-button-text', this.props.buttonText || 'Pick File');
      element.setAttribute('data-fp-button-class', this.props.buttonClass || 'fp__btn');
      element.onchange = function (e) {
        console.log(JSON.stringify(e.fpfile));
      };
      filepicker.constructWidget(element);
    }
  }

  onClickPick(e) {
    e.preventDefault();
    e.stopPropagation();
    filepicker.setKey(this.props.apiKey);
    filepicker.pick();
  }

  render() {
    if (this.props.defaultWidget) {
      return (
        <input id="constructed-widget" />
      )
    } else {
      return (
        <button name="filestack" onClick={this.onClickPick} className={this.props.buttonClass}>{this.props.buttonText}</button>
      )
    }
  }
}

ReactFilestack.defaultProps = {
  defaultWidget: true,
  buttonText: 'Pick File',
};

ReactFilestack.propTypes = {
  apiKey: PropTypes.string.isRequired,
  defaultWidget: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
};
