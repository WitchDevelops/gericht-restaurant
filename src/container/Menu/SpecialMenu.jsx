import React from 'react';
import { Subheading } from '../../components';
import { data } from '../../constants';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <section className="app__specialMenu app__wrapper section__padding">
      <div className="app__specialMenu-title">
        <Subheading title="Menu That Fits Your Palate" className="subheading" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <p className="p__cormorant" key={index}>{wine.title}</p>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app__specialMenu-menu_cocktails">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <p className="p__cormorant" key={index}>{cocktail.title}</p>
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