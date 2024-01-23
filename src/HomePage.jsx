import React from 'react'
import { Header } from './Header';
import { Carausel } from './Carausel';
import { CoinInfo } from './CoinInfo';

export const HomePage = ( { coins, carauselLoading} ) => {
  return (
    <>
    <Carausel coins={coins} carauselLoading={carauselLoading}/>
    <Header />
    <CoinInfo coins={coins}/>
    </>
  )
}
