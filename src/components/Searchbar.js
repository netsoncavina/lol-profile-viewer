import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Searchbar() {
  return (
    <>
      <Row className="justify-content-md-center searchbar">
        <Col md="auto">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Tippy
        content={
          <>
            <img src="./images/mastery/mastery-7.png"></img>{" "}
            <span>700 points</span>
          </>
        }
      >
        <img src="./images/champion/draven.png"></img>
      </Tippy>
    </>
  );
}
