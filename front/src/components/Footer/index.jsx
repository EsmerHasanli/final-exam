import React from 'react'
import './index.scss'
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
        <div className='wrapper'>
            <div>
                <h4>ABOUT US</h4>
                <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. Neque <br/> facere laudantium magnam <br/> voluptatum autem. Amet aliquid <br/> nesciunt veritatis aliquam.</p>
            </div>

            <div className='links'>
                <h4>QUICK LINKS</h4>
                
                <ul>
                    <li>AboutUs</li>
                    <li>AboutUs</li>
                    <li>AboutUs</li>
                    <li>AboutUs</li>
                </ul>
            </div>

            <div className='follow'>
                <h4>FOLLOW US</h4>

                <ul>
                    <li><InstagramIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><InstagramIcon /></li>
                </ul>
            </div>

            <div className='product'>
                <h4>FEATURED PRODUCT</h4>
                
                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />


                <h6>Leather Brown Shoe</h6>
                <p>$60.00</p>
                <button>add to cart</button>

            </div>
        </div>
    </footer>
  )
}

export default Footer