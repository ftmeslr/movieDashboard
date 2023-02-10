import React, { useRef, useState } from "react";
import difultCover from "../asssets/images/army.jpg";
import { ArrowRight2, Pause } from "iconsax-react";

const VidedCard = ({ props, height }) => {
  const { name, date, image } = props;

  return (
    <div className="relative rounded-full">
      <Video image={image} height={height}>
        <source src="/video-example.webm" type="video/webm" />
        <source src="/video-example.mp4" type="video/mp4" />
      </Video>

      <div className="absolute bottom-7 right-0 left-0  m-auto  w-[94%] h-[40px] rounded-xl text-white mx-5 my-2 mb-4">
        <p className="font-bold text-xl">{name}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = ({ image, height }) => {
  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const [togglePlay, setTogglePlay] = useState(false);
  const handlePlayVideo = () => {
    videoRef.current.play();
    setTogglePlay(true);
  };
  const handlePuseVideo = () => {
    videoRef.current.pause();
    setTogglePlay(false);
  };

  const handleProgress = (e) => {
    if (isNaN(e.target.duration)) return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
    console.log(progress);
    console.log(e.target.duration / 3600);
  };

  return (
    <div className={`rounded-full `}>
      {!togglePlay && (
        <button
          className="backdrop-blur-lg bg-gray-400 absolute top-0 left-0 right-0 bottom-0 m-auto z-10 rounded-full w-12 h-12 opacity-90"
          onClick={handlePlayVideo}
        >
          <ArrowRight2
            className="m-auto"
            size="35"
            color="#fff"
            variant="Bold"
          />
        </button>
      )}
      {togglePlay && (
        <button
          className="backdrop-blur-lg bg-gray-400 absolute top-0 left-0 right-0 bottom-0 m-auto z-10 rounded-full w-12 h-12 opacity-90"
          onClick={handlePuseVideo}
        >
          <Pause className="m-auto" size="18" color="#fff" variant="Bold" />
        </button>
      )}
      <video
        poster={image}
        width="100%"
        className={`relative rounded-xl object-cover h-[238px]`}
        onProgress={handleProgress}
        height={height}
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      <progress
        className="absolute bottom-4 left-0 right-0 m-auto w-[90%] h-1 rounded-full"
        id="progress"
        max="100"
        value="40"
      ></progress>
    </div>
  );
};

export default VidedCard;
