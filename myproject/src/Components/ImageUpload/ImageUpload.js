/**
 *
 * ImageUpload
 *
 */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "react-bootstrap";

const Upload = (props) => (
  <div className="ImageUpload">
    <label htmlFor="filePicker" className="label">
      Upload Avatar
    </label>
    <input
      id="filePicker"
      style={{ visibility: "hidden" }}
      type={"file"}
      onChange={props.uploadImage}
    ></input>
  </div>
);

Upload.propTypes = {
  uploadImage: PropTypes.func,
};

export default Upload;
