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
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Island Champs</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/yb0c_6Ax5As?si=q_GJ-FMOpY6W7h49"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Universal Health Care</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/6-lmsotMQqc?si=4o9wgnlNisM8tOeN"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SLTA Romance</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/xFP8d9T7rJ0?si=FLuc7TEiNN5eaXuO"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SLASC Toy Drive 2023</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/pOdqWN1HhfQ?si=LJtd5ngvlsS66_5W"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Mass Domnic 2019 Montage</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/ZbHRLdtOeQc?si=yEDYriUucqDIxOcS"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">WTA Message</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/1d5RSUZy1tk?si=FoDlRVgyWdy6zW3d"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Catch Your Cash Week 4</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/Y-pH0oiEs1Y?si=oSbi5PtCA0eGLJOO"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">SNL Super Summer Splatter Promotion TVC</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/j-owbNrTxkk?si=wrJaw7B1o1wjra75"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">JJS Generic 2018</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/Uk0Hn9OvDb0?si=QKar6MMJF4Htp-kL"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">L'Escape 2019</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/qXgY01IucI0?si=4KW-sgeBbcTBhmaL"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Draft Fast 10K HD</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/Cpj07kB7wik?si=qjcj27iAKQkzMYuV"
            controls={true}
          />}
        </div>
        <div className="md:w-full">
          <h3 className="mb-2 text-center">Casino Night TVC 2020 HD</h3>
          {hasWindow && <ReactPlayer
            width="100%"
            url="https://youtu.be/ecJDN9wGR7U?si=4ZvGhh16LvuesDee"
            controls={true}
          />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
