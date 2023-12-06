import React, { useEffect, useState } from 'react'
import SideNav from '../Components/SideNav/SideNav'
import SongList from '../Components/SongList/SongList'
import { MainContent, PageContainer } from './HomePageStyle'
import MusicPlayer from '../Components/MusicPlayer/MusicPlayer'
import AddSong from '../Components/AddSong/AddSong'

const HomePage = () => {

    // State to control the visibility of the "Add Song" component
    const [showAddSong, setShowAddSong] = useState(false);

    // State to store the list of songs
    const [songs, setSongs] = useState([]);

    // State to keep track of the index of the currently playing song
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    // Function to handle a song click and set the currently playing song index
    const handleSongClick = (index) => {
        setCurrentSongIndex(index);
    };

    // Effect to retrieve stored songs from local storage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('songs');
        setSongs(JSON.parse(storedData) || []);
    }, []);

    // Effect to handle the case where the currently playing song is deleted
    useEffect(() => {
        if (currentSongIndex >= songs.length) {
            setCurrentSongIndex(0);
        }
    }, [currentSongIndex, songs]);


    return (
        <PageContainer>
            <SideNav />
            <MainContent>
                {/* Song list component with the ability to add new songs */}
                <SongList setShowAddSong={setShowAddSong} songs={songs} setSongs={setSongs} songClick={handleSongClick} />

                {/* Conditional rendering of the "Add Song" component */}
                {showAddSong && <AddSong setShowAddSong={setShowAddSong} songs={songs} setSongs={setSongs} />}

                {/* Conditional rendering of the music player if there are songs */}
                {songs.length > 0 && <MusicPlayer songs={songs} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />}
            </MainContent>
        </PageContainer>
    )
}

export default HomePage