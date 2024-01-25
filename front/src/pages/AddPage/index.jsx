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

import {getAll, postData} from '../../api/httprequests'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const AddPage = () => {
  const [products,setProducts] = useState()

  useEffect(() => {
    async function fetchdata(){
      const allProducts = await getAll()
      console.log("allProducts", allProducts)
      setProducts(allProducts)
    }
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
    onSubmit: async (values, actions) => {
      console.log(values)
      alert('data posted')
      await postData(values)
      // actions.resetForm()
    },
  });


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
            {products && products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.image}
                </TableCell>
                <TableCell align="right">{row?.name}</TableCell>
                <TableCell align="right">{row?.price}</TableCell>
                <TableCell align="right"><Button>delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
      </section>
    </>
  )
}

export default AddPage