import React, { useEffect, useRef, useState } from 'react';
import { Controls, MusicDetails, MusicWrapper, Song } from './MusicPlayerStyle';
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from 'react-icons/md';
import { IoPlayOutline, IoPauseOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const MusicPlayer = ({ songs, currentSongIndex, setCurrentSongIndex }) => {

    // Reference to the audio element
    const audioRef = useRef(null);

    // State to track whether the audio is playing or paused
    const [isPlaying, setIsPlaying] = useState(false);

    // Get the current song based on the current index
    const currentSong = songs[currentSongIndex];


    // Function to handle play/pause
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        // Play or pause the audio element
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
        }
    };

    // Function to handle playing the next song
    const handleNext = () => setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));

    // Function to handle playing the previous song
    const handlePrev = () => setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));


    // Effect to update the audio source and play/pause when the current song changes
    useEffect(() => {
        if (audioRef.current && songs.length > 0) {
            // Update the audio source when the current song changes
            audioRef.current.src = currentSong && currentSong.url;

            // Play the audio if it's currently playing
            isPlaying && audioRef.current.play().catch((error) => toast.error('Play error'));
        }
    }, [currentSong, isPlaying, songs]);

    return (
        <MusicWrapper>
            <audio ref={audioRef} src={currentSong && currentSong.url} controls></audio>
            <MusicDetails>
                <Song>
                    <img src={currentSong && currentSong.image} alt="" />
                    <p>{currentSong && currentSong.name}</p>
                </Song>
                <Controls>
                    <span onClick={handlePrev}>
                        <MdOutlineSkipPrevious />
                    </span>
                    <span onClick={handlePlayPause}>{isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}</span>
                    <span onClick={handleNext}>
                        <MdOutlineSkipNext />
                    </span>
                </Controls>
            </MusicDetails>
        </MusicWrapper>
    );
};

export default MusicPlayer;
