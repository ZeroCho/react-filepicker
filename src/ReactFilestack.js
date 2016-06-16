import React, { Component, PropTypes } from 'react';
export default class ReactFilestack extends Component {
  constructor(props) {
    super(props);
    this.onClickPick = this.onClickPick.bind(this);
  }

  onClickPick(e) {
    e.preventDefault();
    filepicker.setKey(this.props.apiKey);
    filepicker.pick();
  }

  render() {
    if (this.props.defaultWidget) {
      return (
        <input type="filepicker" data-fp-apikey={this.props.apiKey} />
      )
    } else {
      return (
        <button onClick={this.onClickPick} className={this.props.buttonClassName}>{this.props.buttonText}</button>
      )
    }
  }
}

ReactFilestack.defaultProps = {
  defaultWidget: true,
  buttonText: 'Pick',
};

ReactFilestack.propTypes = {
  apiKey: PropTypes.string.isRequired,
  defaultWidget: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonClassName: PropTypes.string,
};
