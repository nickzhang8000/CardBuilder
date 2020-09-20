import React, { Component } from "react";
import CardBuilder from "./Containers/CardBuilder";
import CardPreview from "./Containers/CardPreview";
import "./App.css";
import "./App.scss";
import { Container, Row} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      info: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }
  handleChange(event, value) {
    var newInfo = this.state.info;
    newInfo[event] = value;
    this.setState({
      info: newInfo,
    });
  }

  uploadImage(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    const detailVars = ["GIVEN NAME", "SURNAME", "EMAIL", "PHONE"];
    const addressVars = [
      "HOUSE NAME",
      "STREET",
      "SUBURB",
      "STATE",
      "POSTCODE",
      "COUNTRY",
    ];
    return (
      <div className="App">
        <Container>
          <Row xs={1} md={2} lg={2}>
            <CardBuilder
              uploadImage={this.uploadImage}
              handleChange={this.handleChange}
              detailVars={detailVars}
              addressVars={addressVars}
            />
            <CardPreview file={this.state.file} info={this.state.info} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
