import React, { Component } from 'react';

class Nav extends Component {
    componentDidMount = () => {
        this.onScroll();
    }
    onScroll = () => {
        const page_nav = document.getElementById("page-nav");
        const landing = document.getElementById("landing-page");
        window.addEventListener("scroll", () => {
            //Getting position of the bottom (y axis)
            const landing_bottom = landing.getBoundingClientRect().bottom;
            //checking bottom position
            if(landing_bottom<=page_nav.clientHeight && page_nav.classList.contains("page-nav-bottom") ){
                //snap nav to top of page
                page_nav.classList.remove("page-nav-bottom");
                page_nav.classList.add("page-nav-top");
            }else if(landing_bottom>page_nav.clientHeight && page_nav.classList.contains("page-nav-top")){
                //set nav to bottom of landing page
                page_nav.classList.remove("page-nav-top");
                page_nav.classList.add("page-nav-bottom");
            }
        });
    }
    render() {
        return (
            <nav id="page-nav" className="page-nav-bottom">
                <ul className="nav-items-wrapper">
                    <li id="selected-nav-item" className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Experience</li>
                    <li className="nav-item">Portfolio</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
