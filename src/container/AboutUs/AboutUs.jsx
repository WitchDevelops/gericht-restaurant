import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="app__aboutus app__bg app__wrapper section__padding" id="about">
      <div className="app__aboutus--overlay flex__center">
        <img src={images.G} alt="" />
      </div>
      <div className="app__aboutus--content flex__center flex__column">
        <div className="app__aboutus--content_about">
          <div className="app__aboutus--content_about-heading">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="" />
          </div>

          <p className="p__opensans">Learn the fascinating story behind our commitment to crafting exceptional fine dining experiences.</p>
          {/* TODO: refactor this to <Link> element */}
          <button className="custom__button">Learn more</button>
        </div>
        <div className="app__aboutus--content_knife flex__center">
          <img src={images.knife} alt="" />
        </div>
        <div className="app__aboutus--content_history">
          <div className="app__aboutus--content_history-heading">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="" />
          </div>

          <p className="p__opensans">Traverse through the annals of time that have shaped our commitment to culinary excellence.</p>
          {/* TODO: refactor this to <Link> element */}
          <button className="custom__button">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs