import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import {Prompt} from 'react-router-dom';

export default class SubPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: 100,
      offsetRatio: 20,
      destinationPosition: 0,
      willUnmount: false
    }
  }

  componentDidMount() {
    window.addEventListener('runUnmount', (e) => {
      this.setState({ willUnmount: true })
    }, false);
  }

  componentWillUnmount() {
    window.removeEventListener('runUnmount', (e) => {
      this.setState({ willUnmount: true })
    });
  }

  render() {
    console.log(this.state.willUnmount);

    const leftElements = Array(5).fill('lorem ipsum element');
    const rightElements = Array(5).fill('lorem ipsum element');
    const {willUnmount} = this.state;
    return (
      <div ref={(div) => {this.div = div}}>
        <Prompt when={true} message='Are you sure?'/>
        <h1>I'm SubPage !</h1>
        <div className='components'>
        {leftElements.map((text, key) => {
          let startPosition = this.state.initialPosition + key * this.state.offsetRatio;
          let finalPosition = this.state.destinationPosition;

          if (willUnmount) {
             startPosition = this.state.destinationPosition;
             finalPosition = this.state.initialPosition + key * this.state.offsetRatio;
          }


          return (
            <Motion defaultStyle={{x: startPosition}} style={{x: spring(finalPosition, {stiffness: 247, damping: 26})}} key={key}>
              {
                value => {
                  return (
                    <div style={{
                      WebkitTransform: `translate3d(${value.x}px, 0, 0)`,
                      transform: `translate3d(${value.x}px, 0, 0)`,
                      position: `relative`
                    }}>
                      {text}
                    </div>
                  )
                }
              }
            </Motion>
          )
      })}

      {rightElements.map((text, key) => {
        let startPosition = this.state.initialPosition + key * this.state.offsetRatio;
        let finalPosition = this.state.destinationPosition;

        if (willUnmount) {
          startPosition = this.state.destinationPosition;
          finalPosition = this.state.initialPosition + key * this.state.offsetRatio;
        }


        return (
          <Motion defaultStyle={{x: -startPosition}} style={{x: spring(-finalPosition, {stiffness: 247, damping: 26})}} key={key}>
            {
              value => {
                return (
                  <div style={{
                    WebkitTransform: `translate3d(${value.x}px, 0, 0)`,
                    transform: `translate3d(${value.x}px, 0, 0)`,
                    position: `relative`
                  }}>
                    {text}
                  </div>
                )
              }
            }
          </Motion>
        )
    })}

        </div>
      </div>
    )
  }
}
