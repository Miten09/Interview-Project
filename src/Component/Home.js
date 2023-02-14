import React from "react";
import images from "./Images/Dark photos.jpg";
import image1 from "./Images/staff2.jpg";
import "./Home.css";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <img src={images} width={1518} height={550} className="imagess"></img>
      <p className="para">
        <p className="hel">
          <b>Create Design Products,Develops the</b>
          <br />
          <b>Platform & Deliver to Experiences</b>
        </p>
        We Deliver Customize IT Services & Solutions to global bussiness since
        2010,with 100% project <br />
        delivery success.Hire the best dedicated Web developers at affordable
        prices
      </p>
      <Button variant="primary" size="lg" style={{ marginLeft: "650px" }}>
        Portfolio
      </Button>{" "}
      <p></p>
      <img src={image1} width={500} className="img1"></img>
      <p className="below">
        <b>
          Why Most People Choose <br /> Our Bussiness Solution
        </b>
      </p>
      <p className="below1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quas
        <br />
        tempore vel fuga optio perferendis aliquam cum quisquam reiciendis, quis
        <br />
        odio dolor esse cumque. Quidem ea excepturi totam magni pariatur!
      </p>
      <p className="below1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quas
        <br />
        tempore vel fuga optio perferendis aliquam cum quisquam reiciendis, quis
        <br />
        odio dolor esse cumque. Quidem ea excepturi totam magni pariatur!
      </p>
      <img src={image1} width={500} className="img2"></img>
      <p className="below2">
        <b>
          Why Most People Choose <br /> Our Bussiness Solution
        </b>
      </p>
      <p className="below3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quas
        <br />
        tempore vel fuga optio perferendis aliquam cum quisquam reiciendis, quis
        <br />
        odio dolor esse cumque. Quidem ea excepturi totam magni pariatur!
      </p>
      <p className="below3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quas
        <br />
        tempore vel fuga optio perferendis aliquam cum quisquam reiciendis, quis
        <br />
        odio dolor esse cumque. Quidem ea excepturi totam magni pariatur!
      </p>
    </div>
  );
}

export default Home;
