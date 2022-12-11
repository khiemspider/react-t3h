import React, { Component } from "react";
import Header from "../../components/CrudAxoisExample/Header/Header";
import "./CrudAxiosExample.css";
import EntryItem from "../../components/CrudAxoisExample/EntryItem/EntryItem";
import EntryModal from "../../components/EntryModal/EntryModal";

export default class CrudAxiosExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: [
        {
          id: 1,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 2,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          id: 3,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 4,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          id: 5,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 6,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      isShowModal: false,
    };
  }

  handleClick = (item) => {
    console.log("item", item);
  };
  render() {
    return (
      <>
        <Header />
        <main className="wrap_list" id="wrap_list">
          {this.state.listEntries.map((item) => {
            return (
              <EntryItem
                key={item.id}
                avatar={item.avatar}
                handleClick={() => this.handleClick(item)}
              />
            );
          })}
        </main>
        {this.state.isShowModal && <EntryModal />}
      </>
    );
  }
}
