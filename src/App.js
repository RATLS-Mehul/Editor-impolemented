import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddEditor from "./Components/AddEditor";
import "./App.css";
import EditTemplate from "./Components/EditTemplate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: "",
    };
    this.handleTemplate = this.handleTemplate.bind(this);
  }

  handleTemplate(gotTemplate) {
    this.setState({
      template: gotTemplate,
    });
  }

  render() {
    console.log("The got template is", this.state.template);
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/add-editor">Add</Link>
              <Link to="/edit-editor">Edit</Link>
            </li>
          </ul>
          <Routes>
            <Route
              exact
              path="/add-editor"
              element={<AddEditor getTemplateData={this.handleTemplate} />}
            ></Route>
            <Route
              exact
              path="/edit-editor"
              element={<EditTemplate templateData={this.state.template} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
