import imagges from '../../assets';
import { Menuitem, SubHeading } from '../../components';
import { cocktails, wines } from '../../constants';
import './specialMenu.css';

export const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_item">
            {wines.map((item) => (
              <Menuitem key={item.title} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={imagges.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_item">
            {cocktails.map((item) => (
              <Menuitem key={item.title} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};
