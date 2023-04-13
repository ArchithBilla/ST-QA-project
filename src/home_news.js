import * as React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function Home_news(props) {
    
if(5 *(props.pageActive -1) <= props.index&& props.index < 5 *(props.pageActive))
  return (
    <div>
         <Row className="news_details">
                    <Col xs={3}>
                      <img src={props.data.urlToImage} height={"175px"} width={"250px"} />
                    </Col>
                    <Col xs={9}>
                      <div>
                        <a href={props.data.url}><h4 style={{ color: 'blue' }}>{props.data.title}</h4></a>
                        <h6
                          dangerouslySetInnerHTML={{ __html: props.data.description }} />
                        <p className='date'>{props.data.publishedAt.toString().split('T')[0]}</p>
                      </div>
                    </Col>
                  </Row>
    </div>
  );
};