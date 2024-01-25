import React, {useState, useEffect, useContext} from 'react'
import './index.scss'
import StarIcon from '@mui/icons-material/Star';
import { getAll } from '../../api/httprequests';
import { Link } from 'react-router-dom';
import { BasketItemContext } from '../../context/BasketItemContext';
import { WishlistItemContext } from '../../context/WishlistItemContextProvider';

const DinamicSection = () => {
    const [products, setProducts] = useState([])
    const {addItem} = useContext(BasketItemContext)
    const {add} = useContext(WishlistItemContext)

    useEffect(()=>{
        async function fetchData(){
            const datas = await getAll()
            setProducts(datas)
        }
        fetchData()
    },[])

  return (
    <section className='dinamic'>
        <div className='wrapper'>
            <h4>popular products</h4>
            <h2>Our Prodycts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br/> nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br/> consequatur laboriosam ipsam.</p>
        </div>


        <div className='cardWrapper'>
        {products && products.map(data => {
            return(

                <div className='card'>
                   <img src={data?.image} alt="efaewf"/>
                    <h4>{data?.name}</h4>
                    <div className='ratingWrapper'>
                        <div>     
                            <StarIcon style={{color:'yellow'}} />
                            <p>5.00</p>
                        </div>
    
                        <div>
                            <StarIcon style={{color:'yellow'}} />
                            <p>5.00</p>
                        </div>
                    </div>
    
                    <div className='buttonsWrapper'>
                        <button onClick={()=> addItem(data)} className='cart'> cart </button>
                        <button className='view' > <Link to={`/${data._id}`}>view</Link> </button>
                        <button onClick={()=> add(data)} className='cart'> like </button>
                    </div>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default DinamicSection