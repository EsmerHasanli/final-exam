import React, { useContext } from 'react'
import {WishlistItemContext} from '../../context/WishlistItemContextProvider'
import './index.scss'
import Button from '@mui/material/Button';
const Wishlist = () => {
  const {wishlistItem, remove} = useContext(WishlistItemContext)

  return (
    <div className='wishlist'>
    <h1>Wishlist</h1>

    <div className='wrapper'>
      
      {
        wishlistItem && wishlistItem.map(data => {
          return(
            <div className='card'>
            
              <img src={data?.image} alt='product' />
              <h4>{data.name}</h4>
              <Button variant="outlined" onClick={()=> remove(data)}>remove</Button>
            </div>
        )
        })
      }
    </div>
    </div>
  )
}

export default Wishlist