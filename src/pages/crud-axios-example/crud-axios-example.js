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
<<<<<<< HEAD
      avatar: ""
=======
      avatar: "",
>>>>>>> 27d1d45668bdb12dd501fd9c22cad093e6671b2d
    };
  }
handleShowModal=()=>{
 this.setState((prevState)=>({
  ...prevState,
  isShowModal:true,
 }))
}
handleHideModel=()=>{
  this.setState((prevState)=>({
    ...prevState,
    isShowModal: false,
  }))
}

  handleShowModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowModal: true,
    }));
  };

  handleHideModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowModal: false,
    }));
  };

  handleClick = (item) => {
<<<<<<< HEAD
   
    this.setState((prevState) =>({
      ...prevState,
     

      listEntries: this.state.listEntries.filter((it)=>{
          if(it.id !==item.id){
            return it;
          }
      })
    }))
=======
    console.log("item", item);
    this.setState((prevState) => ({
      ...prevState,
      listEntries: this.state.listEntries.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
>>>>>>> 27d1d45668bdb12dd501fd9c22cad093e6671b2d
  };

  handleChangeAvatar = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      avatar: event.target.value,
    }));
  };

  handleSubmitEntry = () => {
    this.setState((prevState) => ({
      ...prevState,
      listEntries: [
        ...prevState.listEntries,
        {
          id: 10,
          avatar: prevState.avatar,
        },
      ],
      avatar: "",
    }));
  };

  render() {
    return (
      <>
        <Header handleShowModal={this.handleShowModal} />
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
<<<<<<< HEAD
        {this.state.isShowModal && <EntryModal  handleShowModal={this.handleShowModal} avatar={this.avatar} />}
=======
        {this.state.isShowModal && (
          <EntryModal
            handleHideModal={this.handleHideModal}
            avatar={this.state.avatar}
            handleChangeAvatar={this.handleChangeAvatar}
            handleSubmitEntry={this.handleSubmitEntry}
          />
        )}
>>>>>>> 27d1d45668bdb12dd501fd9c22cad093e6671b2d
      </>
    );
  }
}
