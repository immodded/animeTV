'use client';
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!url) return;

    const video = videoRef.current;
    const defaultOptions = {};
    
    const initializePlayer = (source) => {
      if (!Hls.isSupported()) {
        video.src = source;
        const plyr = new Plyr(video, defaultOptions);
        setPlayer(plyr);
      } else {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          const availableQualities = hls.levels.map((l) => l.height);
          availableQualities.unshift(0);

          defaultOptions.quality = {
            default: 0,
            options: availableQualities,
            forced: true,
            onChange: (e) => updateQuality(e),
          };

          defaultOptions.i18n = {
            qualityLabel: {
              0: 'Auto',
            },
          };

          const plyr = new Plyr(video, defaultOptions);
          setPlayer(plyr);
        });

        window.hls = hls;
      }
    };

    const updateQuality = (newQuality) => {
      if (newQuality === 0) {
        window.hls.currentLevel = -1;
      } else {
        window.hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            console.log("Found quality match with " + newQuality);
            window.hls.currentLevel = levelIndex;
          }
        });
      }
    };

    initializePlayer(url);

    return () => {
      if (player) {
        player.destroy();
      }
      if (window.hls) {
        window.hls.destroy();
      }
    };
  }, [url]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
