"use client";

import { useEffect, useRef } from "react";

interface Props {
  url: string;
  drmId: string;
  drmKey: string;
  poster?: string;
}

export default function DashPlayer({ url, drmId, drmKey, poster }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const loadScriptOnce = (src: string) =>
      new Promise<void>((resolve) => {

        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    const init = async () => {

      if (instanceRef.current) {
        instanceRef.current.stop?.();
        instanceRef.current.destroy();
        instanceRef.current = null;
      }


      playerRef.current!.innerHTML = "";

  
      await loadScriptOnce(
        "https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"
      );

      await loadScriptOnce(
        "https://cdn.jsdelivr.net/npm/dash-shaka-playback@latest/dist/dash-shaka-playback.js"
      );

      await loadScriptOnce(
        "https://cdn.jsdelivr.net/gh/clappr/clappr-level-selector-plugin@latest/dist/level-selector.min.js"
      );

      const Clappr = (window as any).Clappr;
      const DashShakaPlayback = (window as any).DashShakaPlayback;
      const LevelSelector = (window as any).LevelSelector;

      if (!Clappr) return;

      const player = new Clappr.Player({
        parent: playerRef.current,
        source: url,
        width: "100%",
        height: "100%",
        autoPlay: true,
        mute: false,
        // poster,
        watermark: poster,
        position: "top-right",
        plugins: [DashShakaPlayback, LevelSelector],
        levelSelectorConfig: {
          title: "Quality",
          labelCallback: function (playbackLevel: any, customLabel: string) {
            return customLabel + playbackLevel.level.height + "p";
          },
        },
        shakaConfiguration: {
          drm: {
            clearKeys: {
              [drmId]: drmKey,
            },
          },
        },
      });

      instanceRef.current = player;
    };

    init();

    return () => {
      if (instanceRef.current) {
        instanceRef.current.stop?.();
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, [url, drmId, drmKey]);

  return (
    <div
      ref={playerRef}
      className="w-full aspect-video rounded-2xl overflow-hidden"
    />
  );
}