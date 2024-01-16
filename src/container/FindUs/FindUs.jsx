import { Subheading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './FindUs.css';

const FindUs = () => {
  return (
    <section id="contact" className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <div className="app__contact--title">
          <motion.div
            className="headtext__cormorant"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Subheading title="Contact" />
          </motion.div>
          <motion.h2
            className="headtext__cormorant"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Find Us
          </motion.h2>
        </div>
        <div className="app__contact--info">
          <motion.p
            className="p__opensans app__contact--location"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </motion.p>
          <motion.div
            className="app__contact--hours"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <p className="p__cormorant app__contact--text">Opening Hours</p>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
          </motion.div>

        </div>
        <motion.a
          href="https://maps.app.goo.gl/8ocinDsRpijkUU1m9"
          target="_blank"
          className="custom__button"
          initial={{ opacity: 0 }}
          whileInView={{ y: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.a>
      </div>
      <motion.div
        className="app__wrapper_img"
        initial={{ opacity: 0 }}
        whileInView={{ y: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={images.findus} />
      </motion.div>
    </section>
  )
}

export default FindUs