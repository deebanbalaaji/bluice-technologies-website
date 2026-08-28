"use client";

import { useEffect, useRef, useState } from "react";

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const revealVideo = () => setIsReady(true);
    video.addEventListener("loadeddata", revealVideo);
    video.addEventListener("canplay", revealVideo);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      revealVideo();
    }

    video.muted = false;
    setIsMuted(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      void video.play().catch(() => {
        video.muted = true;
        setIsMuted(true);
        void video.play().catch(() => setIsPlaying(false));
      });
    }

    return () => {
      video.removeEventListener("loadeddata", revealVideo);
      video.removeEventListener("canplay", revealVideo);
    };
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <>
      <video
        ref={videoRef}
        className={`hero-film-media${isReady ? " is-ready" : ""}`}
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster="/media/bi-brand-film-poster.jpg"
        aria-label="Bluice Technologies brand film"
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => setIsReady(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/media/bi-brand-film.mp4" type="video/mp4" />
      </video>
      <div className="hero-film-controls" aria-label="Brand film controls">
        <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause brand film" : "Play brand film"} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12M16 6v12" /></svg>
          ) : (
            <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 8 6-8 6Z" /></svg>
          )}
        </button>
        <button type="button" onClick={toggleSound} aria-label={isMuted ? "Turn brand film sound on" : "Mute brand film"} title={isMuted ? "Sound on" : "Mute"}>
          {isMuted ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10h4l4-4v12l-4-4H5Zm12-1 4 6M21 9l-4 6" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10h4l4-4v12l-4-4H5Zm11-1.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12" /></svg>
          )}
        </button>
      </div>
    </>
  );
}
