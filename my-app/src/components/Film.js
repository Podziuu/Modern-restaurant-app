import React, { useRef, useState } from "react";
import meal from "../assets/meal.mp4";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const Film = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef();

  const clickHandler = () => {
      setVideoPlaying(prevState => !prevState);
        if (videoPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
  }

  return (
    <section className="h-screen bg-[#0C0B08] relative">
      <video
        ref={videoRef}
        className="object-cover h-full w-full"
        src={meal}
        type="video/mp4"
        loop
        muted
        controls={false}
      />
      <div className="absolute bg-black/[.65] inset-0 flex items-center justify-center">
        <div onClick={clickHandler} className="w-[100px] h-[100px] rounded-full border border-[#DCCA87] flex items-center justify-center cursor-pointer">
          {!videoPlaying && <BsPlayFill color="#fff" fontSize={30} />}
          {videoPlaying && <BsPauseFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </section>
  );
};

export default Film;
