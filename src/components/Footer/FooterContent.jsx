import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './FooterContent.css';


const FooterContent = () => {
  return (
    <section className="app__footer-content section__padding app__bg">
      <div className="app__footer-links">
        <motion.div
          className="app__footer-links_contact"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}>
          <h3 className="app__footer-headtext">Contact Us</h3>
          <div className="app__footer-contact">
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <div>
              <p>+44 (161) 3456 7890</p>
              <p>+44 (161) 1234 4567</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__footer-links_logo"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="app__footer-headtext">Gerícht</h3>
          <div>
            <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginBlock: 16 }} />
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__footer-links_work"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="app__footer-headtext">Working hours</h3>
          <div className="app__footer-contact">
            <div className="app__footer-hours">
              <p>Monday-Friday:</p>
              <p>08:00 am - 12:00 am</p>
            </div>
            <div className="app__footer-hours">
              <p>Saturday-Sunday:</p>
              <p>01:00 pm - 02:00 am</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="footer__copyright"
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <p>2021 Gerícht. All Rights reserved.</p>
      </motion.div>
    </section>
  )
}

export default FooterContent