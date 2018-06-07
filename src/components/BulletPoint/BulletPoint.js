import React, { Component } from 'react';


class BulletPoint extends Component {
  render() {
    return (
      <div className="bullet-point">
        <div className="bulletpoint-date">{this.props.date} </div>

        {this.props.title}
        {this.props.subHead}
        {this.props.body}
      </div>
    );
  }
}

export default BulletPoint;