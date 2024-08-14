import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'

function Footer() {
  return (
    <>

<footer className="footer text-light py-4">
      <Container>
        <div className="footer-content d-flex justify-content-between flex-wrap">
          <div className="footer-section">
            <h3><i className="fa-brands fa-beat fa-youtube"></i> Media  Player</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni, molestias </p>
            <p>similique? Nesciunt, aspernatur?</p>
          </div>

          <div className="footer-section section-s px-3 ms-5 section-s-1">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Landing Page</a></li>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">Watch History</a></li>
            </ul>
          </div>

          <div className="footer-section section-s">
            <h3>Guides</h3>
            <ul>
              <li><a href="#">React</a></li>
              <li><a href="#">React Bootstrap</a></li>
              <li><a href="#">Bootswatch</a></li>
            </ul>
          </div>

          <div className="footer-section section-s">
            <h3>Contact Us</h3>
            <div className="subscribe">
              <input type="email" placeholder="Enter your Email ID" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center mt-4">
          <p>Copyright &copy; 2023 Media Player. Built with React.</p>
        </div>
      </Container>
    </footer>

    </>
  )
}

export default Footer
