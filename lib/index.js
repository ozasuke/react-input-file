import React, { Component } from 'react';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      styles: {
        parent: {
          position: 'relative'
        },
        file: {
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: '100%',
          zIndex: 1
        },
        text: {
          position: 'relative',
          zIndex: -1
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    return (
      <div style={this.state.styles.parent}>
        <input
          {...this.props}
          type="file"
          onChange={this.handleChange}
          style={this.state.styles.file}
        />
        <input
          {...this.props}
          type="text"
          tabIndex={-1}
          name={this.props.name + '_filename'}
          value={this.state.value}
          onChange={() => {}}
          style={this.state.styles.text}
        />
      </div>
    );
  }
}

module.exports = FileInput;
