import React, {useState, useEffect} from 'react'
import {Helmet} from "react-helmet";
import TextField from '@mui/material/TextField';
import './index.scss';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../../components/Footer';
import {getAll, postData, deleteData} from '../../api/httprequests'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import * as Yup from 'yup';
 
 const PostSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   price: Yup.string().required('Required'),
   image: Yup.string().required().url(),
   description: Yup.string().required()
 });

const AddPage = () => {
  const [products,setProducts] = useState([])

  const [searchedProduct, setSearchedProduct] = useState()

  const [price, setPrice] =  useState()

   const fetchdata=async ()=>{
    const allProducts = await getAll()
    console.log("allProducts", allProducts)
    setProducts(allProducts)
    setSearchedProduct(allProducts)
  }
  useEffect(() => {
   
    fetchdata()
  }, [])

  useEffect(()=>{
    console.log("products", products)
  },[products])

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      image: '',
      description: '',
      rating: '5',
    },
    validationSchema:PostSchema,
    onSubmit: async (values, actions) => {
      console.log(values)
      alert('data posted')
      await postData(values)
      setProducts([...products,  values])
      actions.resetForm()
    },
  });

  const handleDelete = async (id) =>{
    const deletedData = await deleteData(id)
    const updatedData = products.filter(x=> x._id != id)
    setProducts(updatedData)
  }

  const handleSearch = (e) => {
    const findedProducts =  products.filter(x => x.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
    console.log(findedProducts)

    if(e.target.value == ''){
      setSearchedProduct(products)
    }
    else{
      setSearchedProduct(findedProducts)
    }

  }


  const handleSort = (e) => {
    
  }

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>


      <section className='addpage'>
        <h1> Add Page </h1>

        <form onSubmit={formik.handleSubmit}>
          <TextField id="name" name="name" onChange={formik.handleChange} value={formik.values.name} label="Name" variant="outlined" />
          <TextField id="price" name="price" onChange={formik.handleChange} value={formik.values.price} label="Price" variant="outlined" />
          <TextField id="image" name="image" onChange={formik.handleChange} value={formik.values.image} label="Image" variant="outlined" />
          <TextField id="description" name="description" onChange={formik.handleChange} value={formik.values.description} label="Description" variant="outlined" />
          <Button type='submit' variant='contained'>post</Button>
        </form>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>     
          <TextField onChange={(e)=> handleSearch(e)} style={{margin:'50px 0', width:'60%'}} id="standard-basic" label="Search Product" variant="standard" />       
        </div>


        <div className='table'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchedProduct && searchedProduct.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img style={{width:'100px', height :'100px'}} src={row?.image} alt="image" />
                </TableCell>
                <TableCell align="right">{row?.name}</TableCell>
                <TableCell align="right">{row?.price}</TableCell>
                <TableCell align="right"><Button onClick={()=> handleDelete(row._id)}>delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        <Footer/>
      </section>
    </>
  )
}

export default AddPage