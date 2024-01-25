import React from 'react'
import {Helmet} from "react-helmet";
import DinamicSection from '../../components/DinamicSection';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <DinamicSection/>
    </>
  )
}

export default Home