import React from "react";
import "./index.scss";
import InstagramIcon from "@mui/icons-material/Instagram";

const Leadership = () => {
  return (
    <section className="leadership">
      <div className="wrapper">
        <h4>Team</h4>
        <h2>Leadership</h2>

        <div className="cardWrapper">
          <div className="card">
            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
            <h5>John Rooster</h5>
            <h6>CO-FOUNDER, PRESIDENT</h6>
            <p>
              Nisi at consequatur unde molestiae quidem <br/> provident voluptatum deleniti quo iste error <br/> eos est praesentium distinctio cupiditate tempore <br/>
              suscipit inventore deserunt tenetur.
            </p>

            <ul>
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
          </div>

          <div className="card">
          <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
          <h5>John Rooster</h5>
          <h6>CO-FOUNDER, PRESIDENT</h6>
          <p>
            Nisi at consequatur unde molestiae quidem <br/> provident voluptatum deleniti quo iste error <br/> eos est praesentium distinctio cupiditate tempore <br/>
            suscipit inventore deserunt tenetur.
          </p>

          <ul>
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
        </div>

        <div className="card">
        <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
        <h5>John Rooster</h5>
        <h6>CO-FOUNDER, PRESIDENT</h6>
        <p>
          Nisi at consequatur unde molestiae quidem <br/> provident voluptatum deleniti quo iste error <br/> eos est praesentium distinctio cupiditate tempore <br/>
          suscipit inventore deserunt tenetur.
        </p>

        <ul>
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
      </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
