import styled from 'styled-components';

export const MusicWrapper = styled.div`
  width: 100%;
  z-index: 1;
  audio {
    width: 100%;

    /* Hide play button */
    &::-webkit-media-controls-start-playback-button {
      display: none;
    }

    &::-webkit-media-controls-play-button {
      display: none !important; //For some versions of Chrome
    }

    /* Hide volume slider */
    &::-webkit-media-controls-volume-slider {
      display: none;
    }

  }
`;

export const MusicDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Song = styled.div`
display: flex;
align-items: center;
gap: 10px;
img {
    width: 70px;
    height: 70px;
}
p{
    color: #000;
    font-size: 18.75px;
    font-weight: 500;
}
`;
export const Controls = styled.div`
display: flex;
gap: 10px;
color: #000;
font-size: 25px;
padding-right:22px ;
`;
