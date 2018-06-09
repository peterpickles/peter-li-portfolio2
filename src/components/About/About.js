import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about-page">
        <h1 className="about-page-header">About</h1>
        <div className="about-headshot-wrapper">
          <img className="about-headshot" src={require("../.././media/images/headshot.jpg")} alt="Peter Li's headshot" />
          <ul className="about-name-wrapper">
            <li>Peter Li</li>
            <li>Full Stack Developer</li>
          </ul>
        </div>
        <p className="about-text">
          text about me
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia atque consequuntur omnis quaerat delectus a amet. In, illum nostrum placeat impedit reiciendis iste, quia aperiam eius, officia odio ab recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla molestiae reiciendis sit obcaecati sequi id illum nam quos asperiores hic, error, enim molestias inventore accusantium tempora architecto veniam repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aperiam! Maiores exercitationem quam facilis incidunt explicabo? Nam officia vitae velit aspernatur dolor similique cupiditate, dolorum tempore provident sunt itaque sequi.</p>
      </section>
    );
  }
}

export default About;
