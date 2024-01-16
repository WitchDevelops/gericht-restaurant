import { useState, useRef } from 'react';
import { video } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [hovered, setHovered] = useState(false);
  const vidRef = useRef(null);
  // to toggle play/pause
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <section
      className="app__video"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        controls={false}
        muted
        loop
      />
      {
        (!playVideo && !hovered) && (
          <div className="app__video-overlay--pause flex__center">
            <div
              className="app__video-overlay__circle flex__center"
              onClick={handleVideo}
            >
              <BsFillPlayFill color="#fff" fontSize={30} />
            </div>
          </div>
        )

      }
      {
        (!playVideo && hovered) && (
          <div className="app__video-overlay--pause flex__center">
            <div
              className="app__video-overlay__circle flex__center"
              onClick={handleVideo}
            >
              {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
            </div>
          </div>
        )
      }
      {
        (playVideo && hovered) && (
          <div className="app__video-overlay--play flex__center">
            <div
              className="app__video-overlay__circle flex__center"
              onClick={handleVideo}
            >
              {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
            </div>
          </div>
        )
      }

    </section>
  )
}

export default Intro