import React from "react";
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="container aboutus">
      <div className="text-center" style={{ margin: "50px 0 50px 0" }}>
        <h2>About Us</h2>
        <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'} alt="Line Star" />
      </div>
      <img src="https://slgjewellers.com/wp-content/uploads/2022/02/wsi-imageoptim-banner-2-1600x600-1-1024x384.jpg"></img>
      <h4 style={{margin: "50px 0 50px 0"}}>WHO ARE WE ?</h4>
      <p>Established in 2007 by Shashank Goyal and Pritesh Goyal, BlueStome Jewellers Pvt. Ltd. is one of the best and leading destinations for strikingly and extremely beautiful jewellery. With unmatched design and management skills, the brothers made BlueStome a leading brand in the Indian market.
      </p>
      <p>
Unique designs, high quality and reasonable price make BlueStome stand out from the crowd. BlueStome works with colourful precious gemstones, diamonds, sapphires, pearls and Swarovski crystals, blended with platinum, gold, and silver to make eye-catchy designs.
BlueStome is a tributary of 100-year-old Shyam Lal Goyal Textiles Pvt. Ltd., a prominent name in the Indian textile industry. Being a leading jewellery designer, Pritesh is phenomenal in both contemporary and vintage jewellery. Still, he pretty much loves to adorn the poised and powerful women of the corporate world who prefer revolutionary designs.

Both brothers made BlueStome a diamond shine brand, which houses jewellery covering all occasions – from weddings and engagements to formal parties and meetings. He has adorned various national and international celebrities such as Sagarika Ghatge, Urvashi Rautela, and Brad Hodge.
</p>
<p>
In 2015, Shashank Goyal and Pritesh Goyal received the prestigious ‘Ravishing Award’ for their innovative jewellery designs, a perfect mix of glamour and ingenuity. With this award-winning duo that pays great attention to every detail, whether it is making an Rs. 500 worth of nose pin or a diamond set of crores. Jewellery designs are crafted with perfection and to make your outfit appear unique.

BlueStome Jewellers always appreciated by its valuable and loyal customers and is recognized in overseas exhibitions.</p>
      <div className="text-center" style={{ margin: "50px 0 0 0" }}>
        <h2>Our Team</h2>
        <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'} alt="Line Star" />
      </div>
      <div className="row mt-n1-9 justify-content-center">
        <div className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp">
          <div className="team-style07">
            <div className="team-thumb mb-1-9">
              <div className="thumb">
                <img 
                  src={process.env.PUBLIC_URL + '/assets/images/T001.jpg'}
                  alt="..."
                />
              </div>
              <div className="team-social">
                <ul className="styled-icons">
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://t.me/+MXgG3ykCwLs4YjE1">
                      <i className="fab fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" href="https://www.instagram.com/harshada_s04/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" href="https://www.linkedin.com/in/harshada-sonawane-858576219">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="h5 mb-1">
              <a href="#!">Harshada Sonawane</a>
            </h3>
            <p className="mb-0">Founder</p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp">
          <div className="team-style07">
            <div className="team-thumb mb-1-9">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/T003.jpg'}
                  alt="..."
                  className="img-fluid"
                />
              </div>
              <div className="team-social">
                <ul className="styled-icons">
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://t.me/+MXgG3ykCwLs4YjE1">
                      <i className="fab fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://instagram.com/sarika_nemade?igshid=MzNlNGNkZWQ4Mg==">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://www.linkedin.com/in/sarika-chaudhari-058840279">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="h5 mb-1">
              <a href="#!">Sarika Chaudhari</a>
            </h3>
            <p className="mb-0">Founder</p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp">
          <div className="team-style07">
            <div className="team-thumb mb-1-9">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/T004.jpg'}
                  alt="..."
                />
              </div>
              <div className="team-social">
                <ul className="styled-icons">
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://t.me/+MXgG3ykCwLs4YjE1">
                      <i className="fab fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://instagram.com/samiksha_malewar?igshid=MzNlNGNkZWQ4Mg==">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="styled-icons-item" target="_blank" href="https://www.linkedin.com/in/samiksha-malewar-b4a80b190">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="h5 mb-1">
              <a href="#!">Samiksha Malewar</a>
            </h3>
            <p className="mb-0">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};