import ReactPlayer from "react-player/lazy";
import React, { useState, useEffect } from "react";


const Projects = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <div id="projects" className="w-full justify-center p-2">
      <h2 className="text-center">Our Projects</h2>
      <div className="mt-5 grid grid-cols-1  md:grid-cols-2 gap-2  justify-center items-center">
        <div className="max-w-600">
          <h3 className="mb-2 text-center">Beauty Max Commercial</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263226732?autoplay=1&title=0&byline=0&portrait=0"
            controls={true}
          />}
        </div>
        <div className="max-w-600">
        <h3 className="mb-2 text-center">Criks Funeral Home</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263227321?h=bb33c60bb5"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SLTA - Piton Promo</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/563656106?autoplay=1"
             controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SLTA (Romance Promo)</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/563660671?autoplay=1&title=0&byline=0&portrait=0"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SIAH - Music Video</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/264488017?autoplay=1&title=0&byline=0&portrait=0"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Essential Workers</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/563652516?autoplay=1&title=0&byline=0&portrait=0"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">United and Strong (PSA)</h3>
         {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263546832?h=3fcfff9da5"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Xquisite Nails Plus</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263228640"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Environcare</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263227672?h=d7900fe0e6"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Carro Kitchen - Commercial</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/263227134?h=2d05ee1401"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">News Report - Television</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/580711456?h=6a92f54e47"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Project Chocolate</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://player.vimeo.com/video/580710771?h=20741535a0"
            controls={true}
          />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
