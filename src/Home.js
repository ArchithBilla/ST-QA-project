import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Form";
import axios from 'axios'

import { useState, useEffect } from "react";
let selectedIndex = []
const categories = [
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "Entertainment",
  "Business",
];
let staticData = []
export default function Home(props) {
  const [selectedIndexArray, setselectedIndexArray] = useState([]);
  const [data, setData] = useState("");
  const [savedPrefernces, setsavedPrefernces] = useState('');
  const [random,setRandom] =  useState(10)
  useEffect(() => {
    selectedIndex = []
    categories.forEach((item,index)=>{
console.log(props.userData)
      if(props.userData[item] ){
   selectedIndex.push(index)
      }
    })
    staticData = selectedIndex
    setselectedIndexArray(selectedIndex)
    async function fetchData() {
      try {
        const res = await axios.post("http://localhost:8000/home/news", {
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
    console.log(selectedIndex)
    if (selectedIndex.indexOf(index) === -1) {
      // empty check
      selectedIndex.push(index);
      setselectedIndexArray(selectedIndex);
    } else {
      const newIndex = selectedIndex.indexOf(index);
      selectedIndex.splice(newIndex, 1);
      setselectedIndexArray(selectedIndex);
    }
  };
  const saveChanges = () => {
    console.log(selectedIndexArray)
    if(selectedIndexArray.length !== 0){
      axios
      .post("http://localhost:8000/settings", {
        selectedIndexArray:selectedIndexArray,
        userName : props.authUser
      })
      .then((response) => {
        // console.log(response.data,'---',selectedIndexArray,'---',selectedIndex)
        setsavedPrefernces(response.data)
      });
      setShow(false);
    }
    else {
      alert('Must select atleast one preference')
      setShow(false);
      let change = []
      console.log(savedPrefernces)
      Object.values(savedPrefernces).forEach((item,index)=>{
        if(item === 1)
        change.push(index)
       })
       console.log(change)
       setselectedIndexArray(change)
    }
  
//when everything was deselected at start and save there is bug
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  if (typeof props.pageStatus === "function") props?.pageStatus("Home");
  const testOnChange = () => {
    console.log(props.authUser);
  };
const setRefresh  = async()=>{
  try {
    const res = await axios.post("http://localhost:8000/home/news", {
      userName: props.authUser,
    });
    setData(res.data);
  } catch (err) {
    console.log(err);
  }
// setRandom(Math.floor(Math.random() * 101))
}
// const dates = [
//   new Date('2023-03-01'),
//   new Date('2023-03-15'),
//   new Date('2023-02-28'),
//   new Date('2023-03-10'),
// ];

// dates.sort((a, b) => b.getTime() - a.getTime());
const resetChanges = ()=>{
  let change = []
  setShow(false);
  if(savedPrefernces === ''){
  console.log(props.userData)
  categories.forEach((item,index)=>{
          if(props.userData[item] ){
            change.push(index)
          }
        })
        setselectedIndexArray(change)

      }
  else
  {
     Object.values(savedPrefernces).forEach((item,index)=>{
      if(item === 1)
      change.push(index)
     })
     console.log(change)
     setselectedIndexArray(change)
  }
}
const checkDisable = ()=>{
  if(selectedIndexArray.length === 1 ){

  }
}
  return (
    <>
      <Container>
        <Row style={{ backgroundColor: "rgb(230, 238, 230)" }}>
          <Col xs={12}>
          <Button variant="success" className="refresh" onClick = {setRefresh}>
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
                                  selectedIndexArray.includes(categories.indexOf(item)) ? true : false
                                }
                                label={item}
                                onChange={(e) => {
                                  selectCategory(item, index)}}
                              />
                            </span>
                          </Form>
                        </Col>
                      );
                    })}
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" className={"modal_cancel"} onClick={resetChanges}>Cancel</Button>
                  <Button className={"modal-save"} onClick={saveChanges}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              {Object.values(data).map((item, index) => {
                return (
                  <Row className="news_details">
                     <Col xs={3}>
                  <img src = {item.urlToImage} height = {"175px"} width = {"250px"}/>
                  </Col>
                    <Col xs={9}>
                  <div >
                    <a  href = {item.url}><h4 style = {{color : 'blue'}}>{item.title}</h4></a>
                    <h6
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <p className = 'date'>{item.publishedAt.toString().split('T')[0]}</p>
                  </div>
                  </Col>
                  </Row>
                );
                
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
