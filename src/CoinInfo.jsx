import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export const CoinInfo = ( { coins } ) => {
  return (
    <>
    <Container className='text-center bg-success text-light p-2 mx-2 border rounded' fluid><h2>Here are the most valuable coins over the last 24 hours.</h2></Container>
    <Container fluid>
        {coins.map((coin) => {
            const textColorClass = parseFloat(coin.change, 10) >= 0 ? 'text-success fs-3 fw-bolder' : 'text-danger fs-3 fw-bolder';
            return (
                <Accordion key={coin.uuid} defaultActiveKey="0">
                    <Accordion.Item>
                        <Accordion.Header><img src={coin.iconUrl} height="50" width="50"/><span className='fw-5 fw-bolder mx-2'>{coin.symbol}</span></Accordion.Header>
                        <Accordion.Body className='bg-dark'>
                        <Stack gap={3} className=''>
                            <div className="p-2 border rounded"><span className='fs-3 fw-bolder text-light'>Rank: {coin.rank}</span></div>
                            <div className="p-2 border rounded"><span className='fs-3 fw-bolder text-light'>Current price: ${parseInt(coin.price, 10)}</span></div>
                            <div className="p-2 border rounded"><span className={textColorClass}>24H change: {parseFloat(coin.change, 10)}%</span></div>
                            <Link className='text-decoration-none' to={`/singleCoin/${coin.uuid}`}>
                                <div className='p-2 border rounded d-grid'><Button variant="outline-primary text-light fs-3" size='lg'>More information</Button>{' '}</div>
                            </Link>
                        </Stack>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        })}
    </Container>
    </>
  )
}
/*
<Container className='bg-warning d-flex justify-content-between rounded mt-3'>
            <div className='d-flex flex-grow-1'>
                <span className='fs-1 fw-bold text-light'>Coins</span>
            </div>
            <div className='d-flex flex-grow-1 justify-content-between'>
                <div><span className='fs-1 fw-bold text-light'>Rank</span></div>
                <div><span className='fs-1 fw-bold text-light'>Price</span></div>
                <div><span className='fs-1 fw-bold text-light'>Change</span></div>
            </div>
            <hr />
        </Container>
    {coins.map((coin) => {
        const textColorClass = parseFloat(coin.change, 10) > 0 ? 'text-success' : 'text-danger';
        return (
            <Link key={coin.uuid} to={`/singleCoin/${coin.uuid}`} className='text-decoration-none'>
                <Container className='bg-dark d-flex justify-content-between rounded mt-3 align-items-center text-white'>
                    <div className='d-flex flex-grow-1'>
                        <div><img src={coin.iconUrl} height={50} alt="" /></div>
                        <div className='d-flex flex-column mx-3'>
                            <div><span className='fs-5 fw-bolder text-light'>{coin.symbol}</span></div>
                            <div><span className='fs-10 fw-bolder text-light'>{coin.name}</span></div>
                        </div>
                    </div>
                    <div className='d-flex flex-grow-1 justify-content-between align-items-center'>
                        <div className='mx-2'>{coin.rank}</div>
                        <div className='mx-2'>{parseInt(coin.price, 10).toFixed(2)}</div>
                        <div className='mx-2'><span className={textColorClass}>{coin.change}</span></div>
                    </div>
                </Container>
            </Link>
        )
    })}
*/
