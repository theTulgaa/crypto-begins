import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SingleCoin } from './SingleCoin';
import { HomePage } from './HomePage';
import { Developer } from './Developer';
import { CoinNews } from './CoinNews';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [carauselLoading, setCarauselLoading] = useState(false)

  useEffect(() => {
    document.title = "CRYPTO BEGINS";
    setCarauselLoading(false)
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
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
        setCoins(response.data.data.coins);
        setCarauselLoading(true)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage coins={coins} carauselLoading={carauselLoading}/>}/>
        <Route path='/singleCoin/:id' element={<SingleCoin />}/>
        <Route path='/batman' element={<Developer />}/>
        <Route path='/news' element={<CoinNews />}></Route>
      </Routes>
    </Router>
    <footer className='text-center fs-5 fw-bold bg-primary mt-2 p-2 mx-2 border rounded'>&copy;2024 by Batman from BEYOND. All rights reserved</footer>
    </>
  );
};

export default App;

