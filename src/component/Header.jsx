import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { title,desc} = this.props;
    return (
      <>
      <div className="header">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      </>
    )
  }
}
