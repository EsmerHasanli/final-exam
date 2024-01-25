import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'

export const BasketItemContext = createContext("")


const BasketItemContextProvider = ({children}) => {
    const [basketItem, setBasketItem] = useState(JSON.parse(localStorage.getItem('basket')) ? JSON.parse(localStorage.getItem('basket')) : [])
  
  const addItem = (item) => {
    const currentItem = basketItem.find(x=> x._id == item._id)
    if(currentItem){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "One more to basket",
        showConfirmButton: false,
        timer: 1500
      });
        item.quanity++
        setBasketItem([...basketItem])
    }
    else{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to basket",
        showConfirmButton: false,
        timer: 1500
      });
        setBasketItem([...basketItem, {...item, quanity: 1}])
    }
  }

  const removeItem = (item) => {
    Swal.fire({
      title: "Do you want to remove this item from basket?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updateddata = basketItem.filter(x=> x._id != item._id)
        setBasketItem(updateddata)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

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