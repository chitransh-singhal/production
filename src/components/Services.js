import React, { useState, useEffect } from "react";

const Services = () => {
  const [activeVideo, setActiveVideo] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //     const backgroundVideo = document.getElementById("background-video");
  //     const videoBackground = document.getElementById("video-background");

  //     if (isPlaying && backgroundVideo) {
  //         backgroundVideo.src = activeVideo;
  //         backgroundVideo.play();
  //         videoBackground.style.opacity = 1;
  //     } else if (backgroundVideo) {
  //         backgroundVideo.pause();
  //         backgroundVideo.currentTime = 0;
  //         videoBackground.style.opacity = 0;
  //     }
  // }, [activeVideo, isPlaying]);

  const playVideo = (videoUrl, event) => {
    setActiveVideo(videoUrl);
    setIsPlaying(true);
    document.querySelectorAll(".section").forEach((s) => {
      if (s !== event.target) {
        s.style.opacity = 0.2;
      }
    });
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    document.querySelectorAll(".section").forEach((s) => {
      s.style.opacity = 1;
    });
  };

  return (
    <div>
      <section className="Our-Services">
        <div className="btn-title">
          <h2 className="title-top-text our-title">
            Our Services<i className="bi bi-film"></i>
          </h2>
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">View Work</span>
          </button>
        </div>
        <div className="services">
          <div className="sections">
            <div
              className="section"
              data-bg="https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg"
              style={{"backgroundImage": "url('https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg')"}}
            //   onmouseover={playVideo(
            //     "https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4",
            //     this
            //   )}
            //   onmouseleave={pauseVideo}
            >
              <div className="section-content">
                <h2>Video Production</h2>
              </div>
            </div>
            <div
              className="section"
              data-bg="thumb2.jpg"
              style={{"backgroundImage": "url('https://cdn.pixabay.com/photo/2023/10/10/14/27/night-view-8306605_1280.jpg')"}}
            //   onmouseover={playVideo(
            //     "https://cdn.pixabay.com/video/2025/01/03/250395_large.mp4",
            //     this
            //   )}
            //   onmouseleave={pauseVideo}
            >
              <div className="section-content">
                <h2>Creative Directions</h2>
              </div>
            </div>
            <div
              className="section"
              data-bg="thumb3.jpg"
              style={{"backgroundImage": "url('https://cdn.pixabay.com/photo/2016/11/29/09/29/beach-1868716_1280.jpg')"}}
            //   onmouseover={playVideo(
            //     "https://cdn.pixabay.com/video/2024/02/28/202368-918049003_large.mp4",
            //     this
            //   )}
            //   onmouseleave={pauseVideo}
            >
              <div className="section-content">
                <h2>Promos & Commercial</h2>
              </div>
            </div>
            <div
              className="section"
              data-bg="thumb4.jpg"
              style={{"backgroundImage": "url('https://cdn.pixabay.com/photo/2024/06/08/02/22/beautiful-woman-8815656_1280.jpg')"}}
            //   onmouseover={playVideo(
            //     "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4",
            //     this
            //   )}
            //   onmouseleave={pauseVideo}
            >
              <div className="section-content">
                <h2>Content Creation</h2>
              </div>
            </div>
          </div>

          <div className="video-background" id="video-background">
            <video id="background-video" muted loop></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
