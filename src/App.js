import "./App.css";
import { Nav } from "react-bootstrap";
import Home from "./Component/Home";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Nav className="auto">
        <Nav className="auto2">1st Agency</Nav>

        <Nav.Link className="auto1" href="#Home" style={{ color: "black" }}>
          Home
        </Nav.Link>
        <Nav.Link className="auto1" href="#Company" style={{ color: "black" }}>
          Company
        </Nav.Link>
        <Nav.Link className="auto1" href="#Service" style={{ color: "black" }}>
          Service
        </Nav.Link>
        <Nav.Link
          className="auto1"
          href="#Portfolio"
          style={{ color: "black" }}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          className="auto1"
          href="#Technologies"
          style={{ color: "black" }}
        >
          Technologies
        </Nav.Link>
        <Nav.Link className="auto1" href="#Blog" style={{ color: "black" }}>
          Blog
        </Nav.Link>
        <Nav.Link
          className="auto1"
          href="#Contact us"
          style={{ color: "black" }}
        >
          Contact Us
        </Nav.Link>
      </Nav>
      <Home />
      <Footer />
    </>
  );
}

export default App;
