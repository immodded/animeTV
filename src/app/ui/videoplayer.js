'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (!Hls.isSupported()) {
      video.src = url;
      new Plyr(video);
    } else {
      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const availableQualities = hls.levels.map(level => level.height);
        setQualities(availableQualities);

        // Initialize Plyr after Hls.js has parsed the manifest
        new Plyr(video, {
          quality: {
            default: 0,
            options: [0, ...availableQualities],
            forced: true,
            onChange: (e) => updateQuality(e),
          },
        });
      });

      hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        // Populate quality options
        const availableQualities = data.levels.map(level => level.height);
        setQualities(availableQualities);
      });

      window.hls = hls;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [url]);

  const updateQuality = (newQuality) => {
    if (newQuality === 0) {
      window.hls.currentLevel = -1;
    } else {
      const qualityIndex = qualities.indexOf(newQuality);
      if (qualityIndex !== -1) {
        window.hls.currentLevel = qualityIndex;
      }
    }
    setSelectedQuality(newQuality);
  };

  return (
    <div className="max-w-full mx-auto p-4">
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        crossOrigin="anonymous"
        playsInline
      ></video>
    </div>
  );
};

export default VideoPlayer;
