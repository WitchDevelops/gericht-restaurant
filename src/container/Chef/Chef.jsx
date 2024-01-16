import React from 'react';
import { images } from '../../constants';
import { Subheading } from '../../components';
import { motion } from 'framer-motion';
import './Chef.css';

const Chef = () => {
  return (
    <section className="app__bg app__wrapper section__padding">
      <motion.div 
        className="app__wrapper_img app__wrapper_img-reverse"
        initial={{ opacity: 0 }}
        whileInView={{ y: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
        <img src={images.chef} alt="smiling chef playfully hiding behind a cabbage leaf" />
      </motion.div>
      <div className="app__wrapper_info">
        <div>
          <motion.div initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}>
           <Subheading title="Chef's Word" /> 
          </motion.div>
          
          <motion.h2 
            className="headtext__cormorant"
            initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
            >
              What We believe in
              </motion.h2>
        </div>

        <motion.div 
          className="app__chef-content__quote"
          initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
          >
          <img className="app__chef-content__quote--img" src={images.quote} />
          <p className="app__chef-content__quote--text">
            At Gericht, our commitment to culinary excellence is a relentless pursuit of perfection. I&nbsp;infuse every dish with  a harmonious blend of innovation and tradition, ensuring each plate tells a&nbsp;story of uncompromising quality that transcends the boundaries of ordinary dining.
          </p>
        </motion.div>
        <motion.div 
          className="app__chef-sign"
          initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
          >
          <p className="app__chef-sign__name">Kevin Luo</p>
          <p className="app__chef-sign__role">Chef & Founder</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}>
          <img className="app__chef-sign__img" src={images.sign} alt="signature of chef" />
        </motion.div>
      </div>
    </section>
  )
}

export default Chef