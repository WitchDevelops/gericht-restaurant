import { Subheading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div className="header__wrapper--top">
          <Subheading title="Chase the new flavor" />
        </div>
        <div className="header__wrapper--bottom">
          <h1 className="app__header--h1">The key to fine dining</h1>
          <p className="p__opensans app__header--p">Let our culinary artisans guide you through a gastronomic journey that transcends the ordinary, unlocking the key to unparalleled sophistication in every bite.</p>
          <button className="custom__button">Explore Menu</button>
        </div>

      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="baked salmon with lemon slices and herbs" />
      </div>
    </section>
  )
}

export default Header