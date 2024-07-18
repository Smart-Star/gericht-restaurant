import imagges from '../../assets';
import { SubHeading } from '../../components';
import { awards } from '../../constants';
import './laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />

    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

export const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recongnition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={imagges.laurels} alt="laurels" />
      </div>
    </div>
  );
};
