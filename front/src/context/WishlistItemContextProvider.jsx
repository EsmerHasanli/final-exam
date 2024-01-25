import { createContext, useState, useEffect } from "react";

export const WishlistItemContext = createContext("")


const WishlistItemContextProvider = ({children}) => {
    const [wishlistItem, setwishlistItem] = useState(JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [])
  
  const add = (item) => {
    const finded = wishlistItem.find(x=>x._id == item._id)
    if(finded){
      alert('already added')
    }
    else{
      alert('added')
      setwishlistItem([...wishlistItem, item])
    }
  }

  const remove = (item) => {
    const updateddata = wishlistItem.filter(x=> x._id != item._id)
    setwishlistItem(updateddata)
  }

    useEffect(()=>{
        localStorage.setItem('wishlist', JSON.stringify(wishlistItem))
    },[wishlistItem])
  
    return (
    <WishlistItemContext.Provider value={{wishlistItem, setwishlistItem, add, remove}}>
    {children}
    </WishlistItemContext.Provider>
  )
}

export default WishlistItemContextProvider