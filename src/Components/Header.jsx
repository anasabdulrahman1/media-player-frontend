import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

<Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="" className='text-danger fw-bolder fs-3'>
            <Link style={{textDecoration:"none", color:"red"}} to={'/'}>
          <i class="fa-brands fa-youtube fa-beat me-2"></i>
           Media-Player
           </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
