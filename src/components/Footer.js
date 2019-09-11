import React from 'react';
import Container from 'components/Container';
import './styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, My Gatsby Site</p>
      </Container>
    </footer>
  );
};

export default Footer;