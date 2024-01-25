import { createContext, useState, useEffect } from "react";

export const BasketItemContext = createContext("")


const BasketItemContextProvider = ({children}) => {
    const [basketItem, setBasketItem] = useState(JSON.parse(localStorage.getItem('basket')) ? JSON.parse(localStorage.getItem('basket')) : [])
  
  const addItem = (item) => {
    const currentItem = basketItem.find(x=> x._id == item._id)
    if(currentItem){
        item.quanity++
        setBasketItem([...basketItem])
    }
    else{
        setBasketItem([...basketItem, {...item, quanity: 1}])
    }
  }

  const removeItem = (item) => {
    const updateddata = basketItem.filter(x=> x._id != item._id)
    setBasketItem(updateddata)
  }

    useEffect(()=>{
        localStorage.setItem('basket', JSON.stringify(basketItem))
    },[basketItem])
  
    return (
    <BasketItemContext.Provider value={{basketItem, setBasketItem, addItem, removeItem}}>
    {children}
    </BasketItemContext.Provider>
  )
}

export default BasketItemContextProvider