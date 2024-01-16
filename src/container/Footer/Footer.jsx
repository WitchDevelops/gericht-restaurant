import { FooterContent, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app__footer">
      <Newsletter />
      <FooterContent />
    </footer>
  )
}

export default Footer