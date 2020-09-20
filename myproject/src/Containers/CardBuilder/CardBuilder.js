/**
 *
 * CardBuilder
 *
 */

import PropTypes from "prop-types";
import React from "react";
import ImageUpload from "../../Components/ImageUpload";
import { Button } from "react-bootstrap";

const CardBuilder = (props) => (
  <div className="CardBuilder">
    <h2 className="CardBuilder-title">hCard Builder</h2>
    <div className="divider">PERSONAL DETAILS</div>
    {props.detailVars.map((item, i) => (
      <div
        key={i}
        className={`CardBuilderInput ${
          i % 2 ? "CardBuilderInput-right" : "CardBuilderInput-left"
        }`}
      >
        <label>
          {item}
          <input
            type="text"
            onChange={(e) => props.handleChange(item, e.target.value)}
          />
        </label>
      </div>
    ))}
    <div className="divider">ADDRESS</div>
    {props.addressVars.map((item, i) => (
      <div
        key={i}
        className={`CardBuilderInput ${
          i % 2 ? "CardBuilderInput-right" : "CardBuilderInput-left"
        }`}
      >
        <label>
          {item}
          <input
            type="text"
            onChange={(e) => props.handleChange(item, e.target.value)}
          />
        </label>
      </div>
    ))}
    <div className="CardBuilder-buttons">
    <ImageUpload uploadImage={props.uploadImage} />
    <Button className="CardBuilder-create">Create hCard</Button>{' '}
    </div>
  </div>
);

CardBuilder.propTypes = {
  detailVars: PropTypes.array,
  addressVars: PropTypes.array,
  handleChange: PropTypes.func,
  uploadImage: PropTypes.func,
};

export default CardBuilder;
