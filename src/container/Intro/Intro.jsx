/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import images from '../../assets';
import './intro.css';

// const buttonRole = (handler) => {
//   return {
//     role: 'button',
//     tabIndex: 0,
//     onKeyDown: handler,
//     onClick: handler,
//     ariaLabel: 'playVideo button',
//   };
// };

export const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((play) => !play);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={images.meal} ref={vidRef} type="video/mp4" loop controls={false} muted />

      <div className="app__video-overlay flex__center">
        <button
          type="button"
          onClick={handleVideo}
          className="app__video-overlay_circle flex__center"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </button>
      </div>
    </div>
  );
};
