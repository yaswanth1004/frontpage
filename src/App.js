import React, { useState } from 'react';
import { Navbar, Nav, Modal, Carousel, Card, Button, Container } from 'react-bootstrap';
import './App.css';
import LoginModal from './components/LoginModal';
import SignUp from './components/SignUp';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const redirectToLogin = () => {
    setShowLogin(true);
  };

  const carouselImages = [
    {
      id: 1,
      title: 'Batman',
      description: 'Action',
      image: 'https://drive.google.com/uc?id=10JyiNmf4kaiiXat1-NWUGY1coj6gFm5Y',
    },
    {
      id: 2,
      title: 'INTERSTELLAR',
      description: 'ACTION',
      image: 'https://drive.google.com/uc?id=1spNon42wgMHhM1GsbirAsM_9G96qstKp',
    },
    {
      id: 3,
      title: 'Jersey',
      description: 'Action',
      image: 'https://drive.google.com/uc?id=11bfmWxM0OGC1MYsqrFopr5is1pRjjG0f',
    },
    {
      id: 4,
      title: 'Captain America Winter Soldier',
      description: 'Action',
      image: 'https://drive.google.com/uc?id=1vU6mFOQ7sNH0x6vP2-p2cFs7VYtzTEzC',
    },
    // Your carousel images data...
  ];

  const smallCards = [
    {
      id: 1,
      title: 'The Batman',
      description:<b>Action/Thriller</b>,
      image: 'https://drive.google.com/uc?id=152vcpDOoZepazHxGR-Agn0Cvq2QFC7o-',
    },
    {
      id: 2,
      title: 'Interstellar',
      description: <b>Action/Adventure</b>,
      image: 'https://drive.google.com/uc?id=1QPK2CveF2HQ590TMfBg_6cVUaX-4OMNk',
    },
    {
      id: 3,
      title: 'The Winter Soldier',
      description: <b>Action/Adventure/Fantasy</b>,
      image: 'https://drive.google.com/uc?id=1MejtUaZl4WJX-88aPZLwxu2Zv3mNwrFx',
      width:190,
      height:281
    },
    {
      id: 4,
      title: 'Salaar',
      description: <b>Action/Thriller</b>,
      image: 'https://drive.google.com/uc?id=1O6K6Dnp0hgC8flktAChtnEQTxV0UsB04',
      width:190 ,
      height:281
    },
    {
      id: 5,
      title: 'Jersey',
      description:<b>Action/Drama/Sports</b>,
      image: 'https://drive.google.com/uc?id=1INAISvdxnuK4utEfuApHeC2yfKSKEdZj',
    },
    
    // Your small cards data...
  ];

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">SHOWTIME SQUAD</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <div className="ml-auto d-flex align-items-center">
      <Nav.Link onClick={handleLoginClick}>
        <Button variant="primary">Login</Button>
      </Nav.Link>
      <span className="mx-2"></span> {/* Optional: Separating line */}
      <Nav.Link onClick={handleSignupClick}>
        <Button variant="success">Sign Up</Button>
      </Nav.Link>
    </div>
  </Navbar.Collapse>
</Navbar>

      <Container fluid>
        <div className="main-content">
          <Carousel>
            {carouselImages.map((item) => (
              <Carousel.Item key={item.id} onClick={redirectToLogin}>
                <img
                  className="react w-100"
                  src={item.image}
                  alt={item.title}
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
        <p style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>ON SCREEN</p>

        <div className="d-flex flex-nowrap overflow-auto">
  {smallCards.map((card) => (
    <Card key={card.id} style={{ width: '16rem', margin: '8px' }}>
      <div style={{ width: '100%', height: '25rem', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={card.image}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Button variant="primary" onClick={handleLoginClick}>BOOK NOW</Button>
      </Card.Body>
    </Card>
  ))}
</div>
      </Container>

      <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5deb3' }}>
        <div style={{ color: '#000', textAlign: 'right' }}>@2023 SHOWTIMESQUAD All rights reserved</div>
      </footer>

      <Modal show={showLogin || showSignup} onHide={closeModal}>
        {showLogin && <LoginModal onClose={closeModal} />}
        {showSignup && <SignUp onClose={closeModal} />}
      </Modal>
    </div>
  );
}

export default App;