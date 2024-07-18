import images from '../../assets';

export const SubHeading = ({ title }) => {
  const myStyles = {
    marginBottom: '1rem',
  };

  return (
    <div style={myStyles}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};
