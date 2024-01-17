import { useState, useRef, useEffect } from 'react';
import { video } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const vidRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // to toggle play/pause
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  const handleMobileVideoTap = () => {
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
      onTouchStart={() => setTapped(true)}
      onTouchEnd={() => setTapped(false)}
    >
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        controls={false}
        muted
        loop
        loading="lazy"
      />
      {
        (!playVideo && (!hovered || !tapped)) && (
          <div className="app__video-overlay--pause flex__center">
            <div
              className="app__video-overlay__circle flex__center"
              onClick={isMobile ? handleMobileVideoTap : handleVideo}
            >
              <BsFillPlayFill color="#fff" fontSize={30} />
            </div>
          </div>
        )

      }
       {
        (!playVideo && hovered && !isMobile) && (
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
        (playVideo && hovered && !isMobile) && (
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
      {
        (playVideo && tapped && isMobile) && (
          <div className="app__video-overlay--play flex__center">
            <div
              className="app__video-overlay__circle flex__center"
              onClick={handleMobileVideoTap}
            >
              <BsPauseFill color="#fff" fontSize={30} />
            </div>
          </div>
        )
      }


    </section>
  )
}

export default Intro