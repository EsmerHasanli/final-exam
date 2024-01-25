import React, { useContext } from 'react'
import {WishlistItemContext} from '../../context/WishlistItemContextProvider'
import './index.scss'

const Wishlist = () => {
  const {wishlistItem} = useContext(WishlistItemContext)

  return (
    <div className='wishlist'>
    <h1>Wishlist</h1>
    {
      wishlistItem && wishlistItem.map(data => {
        return(
          <>
          
            <img src={data?.image} alt='product' />
            <h4>{data.name}</h4>
            <button onClick={()=> remove(data)}></button>
          </>
      )
      })
    }
    </div>
  )
}

export default Wishlist