import { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Subheading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 332; //in px
    } else {
      current.scrollLeft += 332;
    }
  }

  return (
    <section className="app__gallery flex__center section__padding">
      <div className="app__gallery-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
          <Subheading title="Instagram" />
        </motion.div>

        <div className="app__gallery-content--wrapper">
          <motion.h2
            className="headtext__cormorant"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
          >
            Photo gallery
          </motion.h2>
          <motion.p
            className="p__opensans app__gallery--text"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
          >
            Get a peek behind the scenes and join our Instagram – where we share the good vibes and delicious bites, just like friends do!
          </motion.p>
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            className="custom__button"
            initial={{ opacity: 0 }}
            whileInView={{ y: [0, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
            View More
          </motion.a>
        </div>

      </div>
      <motion.div
        className="app__gallery-images"
        initial={{ opacity: 0 }}
        whileInView={{ y: [0, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="app__gallery-images__container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <a href="https://www.instagram.com/" target="_blank" className="app__gallery-images__card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="delicious dish" loading="lazy" />
              <BsInstagram className="gallery__image--icon" />
            </a>
          ))}
        </div>
        <div className="app__gallery-images__arrows">
          <BsArrowLeftShort className="gallery__arrow--icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow--icon" onClick={() => scroll('right')} />
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery