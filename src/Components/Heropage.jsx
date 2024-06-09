import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { RiArrowRightSFill } from "react-icons/ri";

import modal from "../Assests/modal.jpg";

const Heropage = () => {
  return (
    <div className="Heropage">
      <div className="container-fluid">
        <div className="row text-center">
          <h6>
            {" "}
            invite your friends and get 50% off on your next purchase{" "}
            <a href="">Invite Now</a>
          </h6>
        </div>
        <div className="row text-center">
          <div className="col-md-6 ">
            <img className="img-fluid sofa-img" src={modal} alt="" />
          </div>
          <div className="col-md-6 p-5 second-col">
            <h1 className="sofa-text ">PRADA</h1>
            <h3 className="mt-3">
              Big Fashion Festival <br />
              Get 50% - 80% off
            </h3>
            <p className="mt-3">
              When it comes to high fashion, it's not hard to see why Prada is
              one <br /> of the world's leading luxury brands. From handbags, eyewear, <br />
              fragrances, and footwear, Prada's diverse range of high-end <br />
              products has cemented its status as one of the biggest fashion
              houses around.
            </p>
            <button className="contactus-btn mt-3">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
