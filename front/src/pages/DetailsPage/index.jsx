import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {getOne} from '../../api/httprequests'
import Footer from '../../components/Footer';

const DetailsPage = () => {
  const {id} = useParams()

  const [data, setData] = useState()

  useEffect(()=>{
    async function fetchdata(){
      const finded = await getOne(id)
      setData(finded)
    }
    fetchdata()
  },[])

  return (
    <>
    <Helmet>
      <title>DetailsPage</title>
    </Helmet>

    {
      data && 
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'40px 0'}}>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
          <p>{data?.price}</p>
          <img src={data?.image} alt='product' />
        </div>

    }
    <Footer/>
    </>
  )
}

export default DetailsPage