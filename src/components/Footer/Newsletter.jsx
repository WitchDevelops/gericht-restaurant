import React from 'react';
import { Subheading } from '../../components';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="app__newsletter section__padding">
      <div className="app__newsletter--header">
        <Subheading title="Newsletter" />
        <h2 className="headtext__cormorant app__newsletter--title">Subscribe To Our Newsletter</h2>
        <p className="p__opensans">And never miss latest updates!</p>
      </div>

      <form className="app__newsletter--form">
        <input type="email" placeholder="Email address" className="app__newsletter--form-input"/>
        <button type="submit" className="custom__button">Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter