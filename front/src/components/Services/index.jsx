import React from 'react'
import './index.scss'
import CloudIcon from '@mui/icons-material/Cloud';

const Services = () => {
  return (
    <div className='services'>
        <div className='wrapper'>
            <h6>OUR SERVICES</h6>
            <h4>We Offer Services</h4>


            <div className='cardWrapper'>
                <div className='card'>
                    <div>
                        <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
                    </div>

                    <div>
                        <h5>Business Consulting</h5>
                        <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div className='card'>
                <div>
                    <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
                </div>

                <div>
                    <h5>Business Consulting</h5>
                    <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>

            <div className='card'>
            <div>
                <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
            </div>

            <div>
                <h5>Business Consulting</h5>
                <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <div className='card'>
        <div>
            <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
        </div>

        <div>
            <h5>Business Consulting</h5>
            <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
            <a href="#">Learn More</a>
        </div>
    </div>

    <div className='card'>
    <div>
        <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
    </div>

    <div>
        <h5>Business Consulting</h5>
        <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
        <a href="#">Learn More</a>
    </div>
</div>

<div className='card'>
<div>
    <CloudIcon style={{color:'rgb(241,104,33)', fontSize:'80px'}}/>
</div>

<div>
    <h5>Business Consulting</h5>
    <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. <br/> Perferendis quis molestiae vitae <br/> eligendi at.</p>
    <a href="#">Learn More</a>
</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Services