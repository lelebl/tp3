import React, { Component } from 'react';


class Date extends Component {
  render() {
    const date = this.props.date;
    

    return (
      <div className="date-container">
        <p>{date}</p>
      </div>
    );
  }
}

export default Date;