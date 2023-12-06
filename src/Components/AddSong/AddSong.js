import React, { useRef, useState } from 'react';
import { AddSongContainer, ImageWrapper, PageContainer, SongDetails, StyledFooter, StyledHeader } from './AddSongStyle';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSong = ({ setShowAddSong, songs, setSongs }) => {

    // State variables to store song details
    const [songName, setSongName] = useState('');
    const [songLink, setSongLink] = useState('');
    const [songSource, setSongSource] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Reference to the file input element
    const fileInputRef = useRef(null);

    // Current date in en-GB format
    const currentDate = new Date().toLocaleDateString('en-GB');

    // Handler for the "Choose File" button click
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    // Handler for file input change
    const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

    // Handler for removing the selected file
    const handleRemoveFile = () => setSelectedFile(null);

    // Handler for adding a new song
    const handleAddSong = async () => {
        // Set loading to true when the login process starts
        setLoading(true);

        // Validate input fields
        if (!songName || !songLink || !songSource || !selectedFile) {

            // Display error message
            toast.error('Please fill in all fields and select an image file');

            // Set loading back to false when the validation fails
            setLoading(false);
            return;
        }

        // Validate if the URL ends with .mp3
        const isMp3Url = songLink.toLowerCase().endsWith('.mp3');
        if (!isMp3Url) {
            // Handle case where the URL does not end with .mp3
            toast.error('Please enter a valid URL to an MP3 audio file');

            // Set loading back to false when the validation fails
            setLoading(false);
            return;
        }

        // Read the file as data URL
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            const imageDataURL = fileReader.result;

            // Create a new song object
            const newSong = {
                id: uuidv4(),
                image: imageDataURL,
                name: songName,
                source: songSource,
                addedOn: currentDate,
                url: songLink,
            };
            // Update the state with the new song
            setSongs([...songs, newSong]);

            // Update local storage with the new song
            localStorage.setItem('songs', JSON.stringify([...songs, newSong]));

            // Display success message
            toast.success('Song Added');

            // Close the Add Song modal
            setShowAddSong(false);

            // Set loading back to false when the song addition process is complete
            setLoading(false);
        };

        // Read the file as data URL
        fileReader.readAsDataURL(selectedFile);
    };

    // Handler for cancelling the Add Song operation
    const handleCancel = () => {
        setShowAddSong(false);
    };

    return (
        <PageContainer>
            <AddSongContainer>
                <StyledHeader>
                    <h4>Add song</h4>
                    <span>
                        <IoMdClose onClick={handleCancel} />
                    </span>
                </StyledHeader>
                <SongDetails>
                    <label>Song Name</label>
                    <input
                        type="text"
                        placeholder="Song Name"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                    />
                    <label>Song link</label>
                    <input
                        type="text"
                        placeholder="URL"
                        value={songLink}
                        onChange={(e) => setSongLink(e.target.value)}
                    />
                    <label>Song Source</label>
                    <input
                        type="text"
                        placeholder="Source Name"
                        value={songSource}
                        onChange={(e) => setSongSource(e.target.value)}
                    />
                    <button type="button" onClick={handleButtonClick}>
                        <span>
                            <MdOutlineFileUpload />
                        </span>
                        Click to Upload Profile Thumbnail
                    </button>
                    <input
                        type="file"
                        id="fileInput"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {selectedFile && (
                        <ImageWrapper>
                            <div>
                                <img src={URL.createObjectURL(selectedFile)} alt="" />
                                <p>{selectedFile.name}</p>
                            </div>
                            <span>
                                <AiTwotoneDelete onClick={handleRemoveFile} />
                            </span>
                        </ImageWrapper>
                    )}
                    <p>Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels</p>
                </SongDetails>
                <StyledFooter>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleAddSong} disabled={loading}>Add</button>
                </StyledFooter>
            </AddSongContainer>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                closeButton={false}
            />
        </PageContainer>
    );
};

export default AddSong;
