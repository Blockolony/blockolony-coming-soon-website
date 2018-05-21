import React, { Component } from 'react';
import ReactSwitch from 'react-switch';

class Switch extends Component {

  render() {
    return (
      <label htmlFor='normal-switch'>
        <ReactSwitch
          onChange={this.props.handleChange}
          checked={this.props.checked}
          id='normal-switch'
          className='blockolony-switch'
          offColor='#FFFFFF'
          onColor='#354a9f'
          offHandleColor='#354a9f'
          onHandleColor='#FFFFFF'
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </label>
    );
  }

}

export default Switch
