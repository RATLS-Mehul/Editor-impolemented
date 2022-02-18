import React, { Component, useState } from "react";

import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

class EditTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.templateData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    this.props.getTemplateData(value);
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      [{ color: [] }, { background: [] }],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  render() {
    return (
      <div className="text-editor">
        <h1>Edit Template</h1>
        <ReactQuill
          placeholder="Write whatever you want"
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <textarea value={this.state.text} />
      </div>
    );
  }
}

export default EditTemplate;
