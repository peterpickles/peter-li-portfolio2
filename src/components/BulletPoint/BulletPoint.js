import React, { Component } from 'react';


class BulletPoint extends Component {
  render() {
    return (
      <div className="bullet-point">
        <div className="bulletpoint-date">{this.props.date} </div>

        <div className="bulletpoint-title">{this.props.title}</div>
        <div className="bulletpoint-subHead">{this.props.subHead}</div>
        <div className="bulletpoint-body">{this.props.body}</div >
      </div>
    );
  }
}

export default BulletPoint;