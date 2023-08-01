// AudioPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ audioUrl, onAudioEnd }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Handle audio playback state changes
    const audioElement = audioRef.current;
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('ended', handleEnd);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup event listeners on unmount
    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('ended', handleEnd);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnd = () => {
    setIsPlaying(false);
    onAudioEnd();
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    const currentTime = audioElement.currentTime;
    setCurrentTime(currentTime);
    const duration = audioElement.duration;
    setDuration(duration);
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  const handleResetProgress = () => {
    const audioElement = audioRef.current;
    audioElement.currentTime = 0;
    setProgress(0);
  };

  const handleResetListeningHistory = () => {
    localStorage.removeItem('listeningHistory');
  };

  const handleClose = (e) => {
    if (isPlaying) {
      const confirmClose = window.confirm('Are you sure you want to close the page? The audio is still playing.');
      if (!confirmClose) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioUrl} controls />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="timestamps">
        <span>{formatTimestamp(currentTime)}</span> / <span>{formatTimestamp(duration)}</span>
      </div>
      <button onClick={handleResetProgress}>Reset Progress</button>
      <button onClick={handleResetListeningHistory}>Reset Listening History</button>
    </div>
  );
};

const formatTimestamp = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default AudioPlayer;


