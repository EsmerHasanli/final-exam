import React from 'react'
import {Helmet} from "react-helmet";
import AboutUs from '../../components/About';
import DinamicSection from '../../components/DinamicSection';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Leadership from '../../components/Leadership';
import Services from '../../components/Services';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Hero/>
    <DinamicSection/>
    <AboutUs/>
    <Leadership/>
    <Services/>
    <Footer/>
    </>
  )
}

export default Home