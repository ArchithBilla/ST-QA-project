import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Form";
import axios from 'axios'

import { useState, useEffect } from "react";
let selectedIndex = [0];

export default function Home(props) {
  const [selectedIndexArray, setselectedIndexArray] = useState([]);
  const [data, setData] = useState("");
  const [bool, setBool] = useState(false);
  const [random,setRandom] =  useState(10)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post("http://localhost:8000/home", {
          userName: props.authUser,
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const selectCategory = (data, index) => {
    if (selectedIndex.indexOf(index) === -1) {
      selectedIndex.push(index);
      setselectedIndexArray(selectedIndex);
    } else {
      const newIndex = selectedIndex.indexOf(index);
      selectedIndex.splice(newIndex, 1);
      setselectedIndexArray(selectedIndex);
    }
  };
  const saveChanges = () => {
    axios
    .post("http://localhost:8000/settings", {
      selectedIndexArray:selectedIndexArray,
      userName : props.authUser
    })
    .then((response) => {
      console.log(response.data);
    });
    setShow(false);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories = [
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
    "Entertainment",
    "Business",
  ];
  if (typeof props.pageStatus === "function") props?.pageStatus("Home");
  const testOnChange = () => {
    console.log(props.authUser);
  };
const setRefresh = ()=>{
setRandom(Math.floor(Math.random() * 101))
}
  return (
    <>
      <Container>
        <Row style={{ backgroundColor: "rgb(230, 238, 230)" }}>
          <Col className="side_space" xs={2}>
            <div style={{ position: "fixed" }}>
              <Button variant="success" className="refresh" onClick={setRefresh}>
                Refresh
              </Button>
              {props.authUser !== "" ? (
                <Button
                  className="settings"
                  variant="secondary"
                  onClick={handleShow}
                >
                  Settings
                </Button>
              ) : null}
            </div>
          </Col>
          <Col xs={10}>
            <div className="main_container">
              <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Choose your favorites
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    {categories.map((item, index) => {
                      return (
                        <Col id="radio" style={{ padding: "5px" }}>
                          {" "}
                          <Form>
                            <span
                              id={`switch-${index}`}
                              onChange={testOnChange}
                            >
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                defaultChecked={
                                  selectedIndex.includes(index) ? true : false
                                }
                                label={item}
                                onChange={() => selectCategory(item, index)}
                              />
                            </span>
                          </Form>
                        </Col>
                      );
                    })}
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button className={"modal-save"} onClick={saveChanges}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              {Object.values(data).map((item, index) => {
                if(index > random-5 && index < random+5){
                return (
                  <div className="news_details" onClick={() => setBool(!bool)}>
                    <h5>{item.title}</h5>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                );
                }
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
