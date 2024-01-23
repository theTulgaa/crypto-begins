import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const CoinNews = () => {
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-23&sortBy=publishedAt&apiKey=548a1b9276954d8789754c49f3178432"

  useEffect(() => {
    setNewsLoading(true);
    axios.get(url)
        .then((res) => {
          setNewsLoading(false);
          setNews(res.data.articles)
        })
        .catch((e) => {
          console.log(e);
        })
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <>
    {newsLoading ? (
        <Alert className='text-center mt-2 border rounded mx-2 p-2'>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />LOADING.....
        </Alert>
    ) : (
      <>
        <Alert variant="success" className='text-center mt-2 border rounded mx-2 p-2'>
            <Alert.Heading>Here is some pieces of news for you</Alert.Heading>
            <p>
              But not everything you see on this page may be 100% true. You need to be more critical and constructive.
            </p>
            <hr />
            <p className="mb-0">
                Click the see more button to get more information.
            </p>
       </Alert>
       <Container fluid className='p-2 bg-dark'>
        <Row>
          {news.map((coin, index) => {
            const author = coin ? coin.author : null;
            const authorname = author && author.length <= 15 ? author : (author ? author.slice(0, 12) + "..." : "No name");

            return (
              <Col key={index} xs={12} sm={12} md={12} lg={4} xl={4}>
                <Container className='border rounded p-2 mb-5' fluid>
                  <Row>
                    <Col>
                        <Badge className='d-flex flex-start align-items-center p-2'>
                          {coin.urlToImage ? (
                            <Image src={coin.urlToImage} roundedCircle height={30} width={30}/>
                          ): null}
                          <span className='mx-1 fs-6 fw-bolder text-white'>{authorname}</span>
                        </Badge>
                    </Col>
                    <Col className='d-flex justify-content-end'><Badge className='bg-success d-flex align-items-center'><span className='text-light fs-6 fw-bolder'>{coin.publishedAt.slice(0, 10)}</span></Badge></Col>
                  </Row>
                  <Row>
                    <Col><p className='border rounded mt-2 p-2 text-light'>{coin.content}</p></Col>
                  </Row>
                  <Row>
                    <Col><Badge className='py-2'><span className='fw-bolder text-light fs-6'>Source: {coin.source.name}</span></Badge></Col>
                    <Col className='justify-content-end d-flex'>
                      <Link to={coin.url}>
                          <Button variant="primary">See more</Button>
                      </Link>
                      </Col>
                  </Row>
                </Container>
              </Col>
            );
          })}

          </Row>
       </Container>
     </>
    )}
    </>
  );
};

