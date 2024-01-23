import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

export const Carausel = ( { coins, carauselLoading } ) => {
    const items = coins.map((coin) => {
        const textColorClass = parseFloat(coin.change, 10) >= 0 ? 'text-success' : 'text-danger';
        return (
          <Link className='d-flex flex-column align-items-center text-decoration-none' to={`/singleCoin/${coin.uuid}`}>
            <img
              src={coin.iconUrl}
              alt={coin.name}
              height="50"
              style={{ marginBottom: 5 }}
            />
            <span className='text-dark'>
              {coin.symbol}
            </span>
            <span className={textColorClass}>{coin.change} %</span>
          </Link>
        );
      });
      const responsive = {
        0: { items: 1 },
        300: {items: 2},
        600: { items: 3 },
        1024: { items: 5 },
      };
  return (
    <>
    {carauselLoading ? (
        <Container className='bg-info p-2' fluid>
            <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            autoPlayInterval={2000}
            disableDotsControls
            disableButtonsControls
            infinite
            />
        </Container>
    ): (
        <Container fluid className='text-center'><h1>LOADING.....</h1></Container>
    )}
    </>
  )
}
