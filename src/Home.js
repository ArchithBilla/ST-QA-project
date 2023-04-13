import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Form";
import axios from "axios";
import Home_news from "./home_news";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Pagination from "react-bootstrap/Pagination";


import { useState, useEffect } from "react";
let selectedIndex = [];
const categories = [
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "Entertainment",
  "Bussiness",
];
export default function Home(props) {
  let pageNumber = 0
  const [selectedIndexArray, setselectedIndexArray] = useState([]);
  const [data, setData] = useState([]);
  const [preferredData, setPreferredData] = useState([]);
  const [pageActive, setPageActive] = useState(1);
  const [saveDisable, setSaveDisable] = useState(false);
  const [allData, setAllData] = useState([])
  useEffect(() => {
    selectedIndex = [];
    categories.forEach((item, index) => {
      if (props.userData[item]) {
        selectedIndex.push(index);
      }
    });
    setselectedIndexArray(selectedIndex);

    async function fetchData() {
      if (props.authUser === "") {
        try {
          const res = await axios.post("http://localhost:8000/home/news", {
            userName: props.authUser,
          });
          setData(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        let temp = {};
        let tempArray = []
        selectedIndex.forEach(async (item, index) => {
          await axios
          .post("http://localhost:8000/home/news/categories", {
            userName: props.authUser,
            category: categories[item].toLowerCase(),
          })
          .then((res) => {
            categories.forEach((item) => {
              if (item.toLowerCase() === Object.keys(res.data)[0]) {
                temp[item] = res.data[item.toLowerCase()];
              }
            });
            props.setApiData(temp);
          });
            await axios
              .post("http://localhost:8000/home/news/prefernces", {
                selection : categories[item].toLowerCase()
              })
              .then((res) => {
                tempArray =  tempArray.concat(res.data)
                setAllData(tempArray)
                setData(tempArray)
                                // temp["Home"] = res.data;
                // setTimeout(() => {
                //   setPreferredData(temp);
                //   setData(temp["Home"]);
                // }, 1000);
              });
          
        });
      }
    }
    fetchData();
  }, []);
  const selectCategory = (data, index) => {
    if (selectedIndex.indexOf(index) === -1) {
      // empty check
      selectedIndex.push(index);
      setselectedIndexArray(selectedIndex);
    } else {
      const newIndex = selectedIndex.indexOf(index);
      selectedIndex.splice(newIndex, 1);
      setselectedIndexArray(selectedIndex);
    }
    if (selectedIndex.length === 0) setSaveDisable(true);
    else setSaveDisable(false);
  };
  const saveChanges = () => {
    let tempArray = []
    let temp = {};
    if (selectedIndexArray.length !== 0) {
      let selectedPath = "";
      const x = async () => {
        await axios
          .post("http://localhost:8000/settings", {
            selectedIndexArray: selectedIndexArray,
            userName: props.authUser,
          })
          .then((response) => {
            let newPrefernces = [];
            Object.keys(response.data).forEach(async (item, index) => {
              console.log(item)

              if (response.data[item] === 1) {
                newPrefernces.push(index);
                await axios
                  .post("http://localhost:8000/home/news/categories", {
                    userName: props.authUser,
                    category: item,
                  })
                  .then((res) => {
                    categories.forEach((item, index) => {
                      if (item.toLowerCase() === Object.keys(res.data)[0]) {
                        temp[item] = res.data[item.toLowerCase()];
                      }
                    });
                  });
              //     await axios
              // .post("http://localhost:8000/home/news/prefernces", {
              //   selection : categories[item].toLowerCase()
              // })
              // .then((res) => {
              //   console.log(res.data)
              //   tempArray =  tempArray.concat(res.data)
              //   console.log(tempArray)
              //   // setAllData(tempArray)
              //   // setData(tempArray)
                                
              // });
              
              }
            });
            console.log(newPrefernces)
            setselectedIndexArray(newPrefernces);
          });
      };
      x();

      setTimeout(() => {
        setShow(false);
      }, 1000);
      setPreferredData(temp);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  if (typeof props.pageStatus === "function") props?.pageStatus("Home");
  const testOnChange = () => {};
  const setRefresh = async () => {
    try {
      const res = await axios.post("http://localhost:8000/home/news", {
        userName: props.authUser,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
    // setRandom(Math.floor(Math.random() * 101))
  };

  const setKey = async (e) => {
    if(e !== 'Home')
    {
    setData(preferredData[e]);
    const res = await axios.post(`http://localhost:8000/home/news/category/${e.toLowerCase()}`)
    setData(res.data);
    }
    else {
      setData(allData) 
    }
  };
  const setSettings = () => {
    let temp = [];
    // console.log(preferredData)
    // Object.keys(preferredData).forEach((item) => {
    //   if (categories.includes(item)) {
    //     temp.push(categories.indexOf(item));
    //   }
    // });
    // setselectedIndexArray(temp);
    setShow(true);
    setSaveDisable(false);
  };

  return (
    <>
      <Container>
        <Row style={{ backgroundColor: "rgb(230, 238, 230)" }}>
          <Col xs={1}>
            <Button variant="success" className="refresh" onClick={setRefresh}>
              Refresh
            </Button>
          </Col>
          <Col xs={9}>
            <Row>
            {props.authUser !== "" ? (
              <Tabs
                onSelect={(k) => setKey(k)}
                className="mb-3"
                defaultActiveKey="Home"
              >
                <Tab eventKey={"Home"} title={"Home"} onSelect = {()=>setPageActive(1)}></Tab>
                {categories.map((item, index) => {
                    return <Tab eventKey={item} title={item} onSelect = {()=>setPageActive(1)}></Tab>;
                  
                })}
              </Tabs>
            ) : null}
            </Row>
            
          </Col>
         
          <Col xs={2}>
            {props.authUser !== "" ? (
              <Button
                className="settings"
                variant="secondary"
                onClick={setSettings}
              >
                Settings
              </Button>
            ) : null}
          </Col>
          
        </Row>
        {props.authUser !== "" ? (     <Row style={{ backgroundColor: "rgb(230, 238, 230)",     paddingBottom: '10px'}} className = 'search-area'>
          <Col xs={1}>
          </Col>
          <Col xs={10}>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button style={{ marginLeft:  '10px'}}className="search-button" variant="primary">
              Search
            </Button>
          </Form>
          </Col>
          <Col xs={1}>
          </Col>
          </Row>) : null}
   
      
        <Row style={{ backgroundColor: "rgb(230, 238, 230)" }}>
          <Col xs={12}>
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
                                  selectedIndexArray.includes(
                                    categories.indexOf(item)
                                  )
                                    ? true
                                    : false
                                }
                                label={item}
                                onChange={(e) => {
                                  selectCategory(item, index);
                                }}
                              />
                            </span>
                          </Form>
                        </Col>
                      );
                    })}
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  {saveDisable ? (
                    <p>You must select atleast one preference</p>
                  ) : null}
                  <Button
                    className={"modal-save"}
                    onClick={saveChanges}
                    disabled={saveDisable}
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              {data?.map((item, index) => {
                return (
                  <Home_news
                    data={item}
                    index={index}
                    pageActive={pageActive}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
        
      </Container>
      <Row>
        <Col xs = {2}>
        </Col>
        <Col xs = {8}>
       
      <Pagination className="pagination">
        {data?.map((item, index) => {
         if( !(index/5).toString().includes('.'))
          return (
            <Pagination.Item
              active={pageActive === (index/5 + 1) ? true : false}
              onClick={(e) => {
                setPageActive(index/5 + 1);
              }}
            >
              {index/5 + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
      </Col>
      <Col xs = {2}>
        </Col>
      </Row>

    </>
  );
}
