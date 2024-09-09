'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [qualities, setQualities] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState(0);

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
      <div className="mt-4">
        <label htmlFor="quality-select" className="block text-lg font-medium text-gray-700">Quality:</label>
        <select
          id="quality-select"
          value={selectedQuality}
          onChange={(e) => updateQuality(Number(e.target.value))}
          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value={0}>Auto</option>
          {qualities.map((quality, index) => (
            <option key={index} value={quality}>
              {quality}p
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
