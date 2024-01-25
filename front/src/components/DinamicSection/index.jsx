import React, {useState, useEffect, useContext} from 'react'
import './index.scss'
import StarIcon from '@mui/icons-material/Star';
import { getAll } from '../../api/httprequests';
import { Link } from 'react-router-dom';
import { BasketItemContext } from '../../context/BasketItemContext';

const DinamicSection = () => {
    const [products, setProducts] = useState([])
    const {addItem} = useContext(BasketItemContext)

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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>


        <div className='cardWrapper'>
        {products && products.map(data => {
            return(

                <div className='card'>
                   <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt="efaewf"/>
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
                    </div>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default DinamicSection