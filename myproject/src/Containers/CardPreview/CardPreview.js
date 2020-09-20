/**
 *
 * CardPreview
 *
 */

import PropTypes from "prop-types";
import React from "react";

const CardPreview = (props) => (
  <div className="CardPreview">
    <div className="CardPreview-container">
      <h4 className="CardPreview-title">HCARD PREVIEW</h4>
      <div className="CardPreview-name">
        {props.info["GIVEN NAME"]} {props.info["SURNAME"]}
      </div>

      <div className="CardPreview-address">
        <div className="CardPreview-addressItem">
          <p className="title"> EMAIL </p>
          <p className="content">{props.info["EMAIL"]} </p>
        </div>

        <div className="CardPreview-addressItem">
          <p className="title"> PHONE </p>
          <p className="content">{props.info["PHONE"]} </p>
        </div>

        <div className="CardPreview-addressItem">
          <p className="title"> ADDRESS </p>
          <p className="content">{props.info["HOUSE NAME"]} {props.info["STREET"]}</p>
        </div>

        <div className="CardPreview-addressItem">
          <p className="title address2"> ADDRESS </p>
          <p className="content">{props.info["SUBURB"]} {props.info["STATE"]}</p>
        </div>

        <div className="CardPreview-addressItem">
          <p className="title"> POSTCODE </p>
          <p className="content">{props.info["POSTCODE"]} </p>
          <p className="title"> COUNTRY </p>
          <p className="content">{props.info["COUNTRY"]} </p>
        </div>
      </div>
    </div>
    <div className="CardPreview-avatar">
      {props.file ? (
        <img src={props.file} />
      ) : (
        <img src={"public/placeholder.png"} />
      )}
    </div>
  </div>
);

CardPreview.propTypes = {
  file: PropTypes.object,
  info: PropTypes.object,
};

export default CardPreview;
