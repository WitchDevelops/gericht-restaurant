import { Subheading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <motion.div
          className="header__wrapper--top"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Subheading title="Chase the new flavor" />
        </motion.div>
        <div
          className="header__wrapper--bottom"

        >
          <motion.h1
            className="app__header--h1"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >The key to fine dining</motion.h1>
          <motion.p
            className="p__opensans app__header--p"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Let our culinary artisans guide you through a gastronomic journey that transcends the ordinary, unlocking the key to unparalleled sophistication in every bite.
          </motion.p>
          <motion.a href="#menu" className="custom__button" initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1.0 }}>Explore Menu</motion.a>
        </div>

      </div>
      <motion.div 
        className="app__wrapper_img"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
        <img src={images.welcome} alt="baked salmon with lemon slices and herbs" fetchpriority="high" />
      </motion.div>
    </section>
  )
}

export default Header