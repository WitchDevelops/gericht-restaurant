import { Subheading, MenuItem } from '../../components';
import { data } from '../../constants';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <section className="app__specialMenu app__wrapper section__padding" id="menu">

      <motion.div
        className="app__specialMenu--title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Subheading title="Menu That Fits Your Palate" className="subheading" />
        <motion.h2
          className="headtext__cormorant"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Today's Special
        </motion.h2>
      </motion.div>

      <div className="app__specialMenu--menu">
        <div className="app__specialMenu--menu_wine">
          <motion.h3
            className="app__specialMenu--menu_heading"
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Wine & Beer
          </motion.h3>
          <div className="app__specialMenu--menu_items">
            {data.wines.map((wine, index) => (
              <motion.div
                key={`${wine.title}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MenuItem title={wine.title} price={wine.price} tags={wine.tags} />
              </motion.div>

            ))}
          </div>
        </div>

        <motion.div
          className="app__specialMenu--menu_img"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={images.menu} alt="menu img" />
        </motion.div>

        <div className="app__specialMenu--menu_cocktails">
          <motion.h3 className="app__specialMenu--menu_heading" initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Cocktails
          </motion.h3>
          <div className="app__specialMenu--menu_items">
            {data.cocktails.map((cocktail, index) => (
              <motion.div
                key={`${cocktail.title}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <MenuItem title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              </motion.div>

            ))}
          </div>
        </div>
      </div>

      <div>
        <button className="custom__button">View More</button>
      </div>

    </section>
  )
}

export default SpecialMenu