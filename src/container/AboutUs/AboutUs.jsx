import { images } from '../../constants';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="app__aboutus app__bg app__wrapper section__padding" id="about">
      <motion.div
        className="app__aboutus--overlay flex__center"
        initial={{ opacity: 0 }}
        whileInView={{ y: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}>
        <img src={images.G} alt="" />
      </motion.div>
      <div className="app__aboutus--content flex__center flex__column">
        <div className="app__aboutus--content_about">
          <motion.div
            className="app__aboutus--content_about-heading"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="headtext__cormorant">About Us</h2>
            <img src={images.spoon} alt="" />
          </motion.div>

          <motion.p
            className="p__opensans"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Learn the fascinating story behind our commitment to crafting exceptional fine dining experiences.
          </motion.p>
          {/* TODO: refactor this to <Link> element */}
          <motion.button
            className="custom__button"
            initial={{ opacity: 0 }}
            whileInView={{ y: [0, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Learn more
          </motion.button>
        </div>

        {/* knife */}
        <motion.div
          className="app__aboutus--content_knife flex__center"
          initial={{ opacity: 0 }}
          whileInView={{ y: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}>
          <img src={images.knife} alt="" />
        </motion.div>

        <div className="app__aboutus--content_history">
          <motion.div
            className="app__aboutus--content_history-heading"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="headtext__cormorant">Our History</h2>
            <img src={images.spoon} alt="" />
          </motion.div>

          <motion.p
            className="p__opensans"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            Traverse through the annals of time that have shaped our commitment to culinary excellence.
          </motion.p>
          {/* TODO: refactor this to <Link> element */}
          <motion.button className="custom__button" initial={{ opacity: 0 }}
            whileInView={{ y: [0, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1.0 }}>
            Learn more
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs