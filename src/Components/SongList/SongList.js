import React, { useState } from 'react'
import { MainContainer, PageNumber, StyledTable, SubHeader } from './SongListStyle'
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaPlay } from "react-icons/fa6";

const SongList = ({ setShowAddSong, songs, setSongs, songClick }) => {
    console.log(songs);

    // State for managing current page and active page
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    // Number of items to display per page
    const itemsPerPage = 3;

    // Calculating the range of items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = songs.slice(indexOfFirstItem, indexOfLastItem);
    console.log("currentItems", currentItems);

    // Generating page numbers based on the total number of items
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(songs.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Function to handle page changes
    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActivePage(pageNumber);
    }

    // Function to handle song deletion
    const handleDeleteSong = (id) => {
        const updatedSongs = songs.filter((song) => song.id !== id);
        setSongs(updatedSongs);
        localStorage.setItem('songs', JSON.stringify(updatedSongs));
    }

    return (
        <MainContainer>
            <SubHeader>
                <h4>Songs</h4>
                <button onClick={() => setShowAddSong(true)}>Add Songs</button>
            </SubHeader>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Song Name</th>
                        <th>Souce</th>
                        <th>Added On 3</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.length > 0 && (
                            currentItems.map((song, index) => (
                                <tr key={song.id}>
                                    <td>
                                        <img src={song?.image} alt="" />
                                        {song?.name}
                                    </td>
                                    <td>{song?.source}</td>
                                    <td>{song?.addedOn}</td>
                                    <td><span onClick={() => songClick(index)}><FaPlay /></span></td>
                                    <td><span onClick={() => handleDeleteSong(song.id)}><AiTwotoneDelete /></span></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>

            </StyledTable>
            <PageNumber>
                {pageNumbers.map((number) =>
                    <li key={number}>
                        <button style={{ backgroundColor: number === activePage ? 'rgba(24, 144, 255, 1)' : 'transparent', }} onClick={() => handlePage(number)}>{number}</button>
                    </li>
                )}
            </PageNumber>
        </MainContainer>
    )
}

export default SongList