import React, { Component } from 'react';

//components
import BulletPoint from ".././BulletPoint/BulletPoint.js"
class Experience extends Component {
  constructor() {
    super();

    this.state = {
      workExperience: [{
        date: "Mar, 2011",
        title: "Blah",
        subHead: "Blah",
        body: "blah blah blah"
      }]
    };

  }
  render() {
    return (
      <section id="experience-page">
        <h1 className="experience-header"> Work Experience </h1>
        {this.state.workExperience.map((workInfo) => {
          return <BulletPoint date={workInfo.date} title={workInfo.title} subHead={workInfo.subHead} body={workInfo.body} />
        })}
      </section>
    );
  }
}

export default Experience;