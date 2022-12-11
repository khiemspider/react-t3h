import React, { Component } from "react";
import "./EntryModal.css";

export default class EntryModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" style={{ float: "right", cursor: "pointer" }}>
            ×
          </span>
          <form>
            <div className="input__wrapper">
              <div>
                <label htmlFor="API">API</label>
                <input type="text" placeholder="API.." />
              </div>
              <div>
                <label htmlFor="Cors">Cors</label>
                <input type="text" placeholder="Cors.." />
              </div>
            </div>
            <div className="input__wrapper">
              <div>
                <label htmlFor="Category">Category</label>
                <input type="text" placeholder="Category.." />
              </div>
              <div>
                <label htmlFor="HTTPS">HTTPS</label>
                <select name="HTTPS">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
            </div>
            <label htmlFor="img">Image</label>
            <input className="input__form" type="text" placeholder="Image..." />
            <label htmlFor="description">Description</label>
            <input
              className="input__form"
              type="text"
              placeholder="Description..."
            />
            <label htmlFor="link">Link</label>
            <input className="input__form" type="text" placeholder="Link.." />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
