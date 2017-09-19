import React, {Component} from 'react';

export default class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.yes = this.yes.bind(this)
    this.no = this.no.bind(this)

    this.state = {
      hidden: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.callback(true);
      this.setState({ hidden: true });
    }, 200);
  }

  yes() {
    this.props.callback(true)
    this.setState({ hidden: true })
  }

  no() {
    this.props.callback(false)
    this.setState({ hidden: true })
  }

  render() {
    return (
      <div className='holder'>

      </div>
    )
  }
}
