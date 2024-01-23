import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js"
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

export const SingleCoin = () => {
    const { id } = useParams();
    const [singlecoin, setsinglecoin] = useState([])
    const [singleLoading, setSingleLoading] = useState(false);
    const [graph, setGraph] = useState([])
    useEffect(() => {
        setSingleLoading(false)
        const fetchData = async () => {
          const options = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              'tiers[0]': '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '50',
              offset: '0',
            },
            headers: {
              'X-RapidAPI-Key': '844cf7f046mshcd3c1938933f8a1p1e5c0ejsnf6296d9b13f5',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            },
          };
    
          try {
            const response = await axios.request(options);
            setsinglecoin(response.data.data.coin)
            setSingleLoading(true)
            setGraph(response.data.data.coin.sparkline)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    
    }, [id]);
    const chartData = {
      labels: Array.from({ length: graph.length - 1 }, (_, i) => i),
      datasets: [
        {
          label: 'Coin Prices',
          data: graph,
          borderColor: 'blue',
          fill: false,
        },
      ],
    };
    return (
      <>
      {singleLoading ? (
        <>
        <h1 className='text-center bg-light w-100'>EXPLORE MORE NIGGA</h1>
        <Row>
          <Col lg={4} md={12} className='bg-success text-light p-5'>
            <Row className='d-flex align-items-center flex-column justify-content-center'>
              <Col className='d-flex align-items-center justify-content-center flex-column'><img src={singlecoin.iconUrl} height={200} className='rotate'/> <span className='fs-2 fw-bold'>{singlecoin.name}</span></Col>
              <Col>
                <p className='fs-6 fw-bold'>{singlecoin.description}</p>
              </Col>
              <Col className='d-flex align-items-center flex-column justify-content-center'><span className='fs-2 fw-bold'>Rank: {singlecoin.rank}</span></Col>
              <Col className='d-flex align-items-center flex-column justify-content-center'><span className='fs-2 fw-bold'>Current price: ${parseInt(singlecoin.price, 10).toFixed(2)}</span></Col>
              <Col className='d-flex align-items-center flex-column justify-content-center'><span className='fs-2 fw-bold'>All time: ${parseInt(singlecoin.allTimeHigh.price, 10).toFixed(2)}</span></Col>
              <Col className='d-flex align-items-center flex-column justify-content-center'><span className='fs-2 fw-bold'>Change: {singlecoin.change}</span></Col>
              <Col className='d-flex align-items-center flex-column justify-content-center'><Button variant='primary' size='lg'><a href={singlecoin.websiteUrl} className='text-decoration-none text-light' target='n_blank'>More Info</a></Button></Col>
            </Row>
          </Col>
          <Col lg={8} md={12} className='bg-dark'>
            <Line data={chartData}/>
          </Col>
        </Row>
        </>
      ) : (
        <Container fluid className='bg-secondary d-flex align-items-center justify-content-center'>
          <Button disabled variant="primary" size='lg'>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
            </Button>
        </Container>
      )}
      </>
    )
}
