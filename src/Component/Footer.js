import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="one">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  <b style={{ fontSize: "25px" }}>1st Agency</b>
                </h6>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  assumenda sit? Voluptas deleniti tenetur rem ullam alias neque
                  similique, molestias minima placeat deserunt nostrum nesciunt
                  ea corrupti doloremque quae nobis.
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ fontSize: "18px", fontFamily: "unset" }}
                >
                  Quick Links
                </h6>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Who We Are
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    We are hiring
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Life at WWT
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Portfolio
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </pre>
                <pre>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </pre>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ fontSize: "18px" }}
                >
                  Our Services
                </h6>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Graphics & UI/UX Design
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Website Developement
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Wordpress Developement
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    PHP Framework Devlopement
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Ecommerce Devlopement
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Open Source Devlopement
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Mobile App Devlopement
                  </a>
                </pre>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ fontSize: "18px", fontFamily: "unset" }}
                >
                  Technologies
                </h6>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Xamarin
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Iconic
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    React Native
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Flutter
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Codeingiter
                  </a>
                </pre>
                <pre style={{ fontFamily: "unset" }}>
                  <a href="#!" className="text-reset">
                    Node.js
                  </a>
                </pre>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
