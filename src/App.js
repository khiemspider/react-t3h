import React from "react";
import "./App.css";
import CrudAxiosExample from "./pages/crud-axios-example/crud-axios-example";
import Form from "./pages/form/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        <CrudAxiosExample />
        {/* <Form /> */}
      </>
    );
  }
}

export default App;
