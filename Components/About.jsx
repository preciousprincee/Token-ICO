import React from "react";

const About = () => {
  return(
     <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div className="row align-item-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/about_img.png" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
        <div className="about__content wow fadeInRight" data-wow-delay="100ms">
          <div className="sec-title mb-35">
            <h2 className=" sec-title__title mb-25">WHAT IS ICO CRYPTO</h2>
            <h5 className="sec-title_subtitle">
              Initial Coin Offerings (ICOs): A Revolutionary Way to Raise Funds Using Blockchain Technology.
            </h5> <br />
            <p>
              Our ICO project is a groundbreaking initiative designed to introduce innovative solutions powered by blockchain technology. By leveraging decentralized systems, we aim to address industry-specific challenges and enable seamless, transparent, and secure transactions for businesses and individuals alike.
            </p>

          </div>
          <ul className="about__list ul_li">
            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Decentralized Platform
            </li>

            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Rewards mechanism
            </li>

            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Crowd wisdom
            </li>

            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Investor Protection 
            </li>

            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Token Sale Phases 
            </li>
            <li>
              <img src="assets/img/icon/a_arrow.svg" alt="" />
              Exchange listing
            </li>
          </ul>
        </div>
        
        </div> 
        </div>
       
      </div>
      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>
     </section>
    );
};

export default About;
