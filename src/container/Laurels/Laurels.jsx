import React from 'react';
import { images, data } from '../../constants';
import { Subheading, AwardCard } from '../../components';
import { motion } from 'framer-motion';
import './Laurels.css';

const Laurels = () => {
  return (
    <section className="app__bg app__wrapper section__padding app__laurels_wrapper" id="awards">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={images.logo} alt="" className="app__laurels_logo" />
      </motion.div>
      <div className="app__wrapper_info app__laurels">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Subheading title="Awards & recognition" />
          </motion.div>

          <motion.h2
            className="headtext__cormorant app__laurels_heading"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Our Laurels
          </motion.h2>
          <div className="app__laurels_awards">
            {data.awards.map((award) =>
              <motion.div
                key={award.title}
                initial={{ opacity: 0 }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <AwardCard award={award} />
              </motion.div>
            )}
          </div>
        </div>

        <motion.div
          className="app__laurels_img"
          initial={{ opacity: 0 }}
          whileInView={{ y: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.laurels} alt="Juicy steak" />
        </motion.div>
      </div>
    </section>
  )
}

export default Laurels