import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>It's Works !</h1>
        <hr/>
        <div>
          <div className='sideblock -left'>
            <h3>I'm left sidebar</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className='sideblock -right'>
            <h3>I'm right sidebar</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
      </div>
    )
  }
}
