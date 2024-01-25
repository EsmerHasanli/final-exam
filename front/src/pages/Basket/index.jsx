import React, {useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BasketItemContext } from '../../context/BasketItemContext';
import Button from '@mui/material/Button';

const Basket = () => {
  const {basketItem, removeItem} =  useContext(BasketItemContext)
  return (
    <>
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
        {basketItem && basketItem.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <img style={{width:'100px', height :'100px'}} src={row?.image} alt="image" />
            </TableCell>
            <TableCell align="right">{row?.name}</TableCell>
            <TableCell align="right">{row?.price}</TableCell>
            <TableCell align="right"><Button onClick={()=> removeItem(row)}>delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
    </>
  )
}

export default Basket