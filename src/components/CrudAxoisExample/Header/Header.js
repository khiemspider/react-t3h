import React, { Component } from "react";
import "./Header.css";


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <div className="head_container">
          <h2>List Entries</h2>
<<<<<<< HEAD
          <button className="btn-new-entries" id="myBtn"
          
=======
          <button
            className="btn-new-entries"
            id="myBtn"
            onClick={this.props.handleShowModal}
>>>>>>> 27d1d45668bdb12dd501fd9c22cad093e6671b2d
          >
            Create new Entry +
          </button>
        </div>
      </header>
    );
  }
}
