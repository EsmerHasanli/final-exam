import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import './index.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="topNavWrapper">
        <ul className="social">
          <li>
            <InstagramIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>

        <ul className="contact">
          <li>
            <InstagramIcon style={{color:'rgb(241,104,33)' }}/>
            <span>(+1) 234 5678 9101</span>
          </li>
          <li>
            <InstagramIcon style={{color:'rgb(241,104,33)' }}/>
            <span>(+1) 234 5678 9101</span>
          </li>
        </ul>
      </div>
      <nav>
        <div className='wrapper'>
            <div className="logo">
                <h1><p>Selling</p> <span>.</span></h1>            
            </div>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/add'>Add Page</Link>
                </li>

                <li>
                <Link to='/basket'>Basket</Link>
            </li>

            <li>
            <Link to='/wishlist'>Wishlist</Link>
        </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
