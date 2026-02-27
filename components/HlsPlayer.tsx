"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface Props {
  url: string;
  autoPlay?: boolean;
}

export default function PlyrHlsPlayer({ url, autoPlay = true }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    let hls: Hls | null = null;
    let plyr: any = null;

    const init = async () => {
      const Plyr = (await import("plyr")).default;

      if (!videoRef.current) return;
      const video = videoRef.current;

      const defaultOptions: any = {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["quality", "speed"],
        quality: {
          default: 0,
          options: [],
          forced: true,
          onChange: (quality: number) => {},
        },
      };

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          const qualities = hls!.levels.map((level) => level.height);

          defaultOptions.quality = {
            default: qualities[qualities.length - 1], // kualitas tertinggi default
            options: qualities,
            forced: true,
            onChange: (quality: number) => {
              hls!.levels.forEach((level, index) => {
                if (level.height === quality) {
                  hls!.currentLevel = index;
                }
              });
            },
          };

          plyr = new Plyr(video, defaultOptions);

          if (autoPlay) {
            video.play().catch(() => {});
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari native HLS
        video.src = url;
        plyr = new Plyr(video, defaultOptions);
      }
    };

    init();

    return () => {
      if (hls) hls.destroy();
      if (plyr) plyr.destroy();
    };
  }, [url, autoPlay]);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      className="w-full aspect-video  rounded-2xl overflow-hidden"
    />
  );
}