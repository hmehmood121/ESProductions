import React, { useState, useEffect } from 'react'
import ReactPlayer from "react-player/lazy";

function Reel() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="mt-5 justify-center items-center">
        <div className="max-w-600">
          {hasWindow && <ReactPlayer
            url="https://vimeo.com/774715693"
            width="100%"
            playing={true}
            loop={true}
            controls={true}
            muted={true}
          />}
        </div>
        </div>
</section>
    </div>
  )
}

export default Reel