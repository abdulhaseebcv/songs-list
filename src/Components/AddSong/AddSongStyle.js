import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
position: fixed;
left: 0;
top: 0;
height: 100vh;
background: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
`;

export const AddSongContainer = styled.div`
width: 798px;
border-radius: 2px;
background: #FFF;
box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
font-size: 14px;
font-weight: 400;
line-height: 22px;
`;

export const StyledHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 16px 24px;
border-bottom:1px solid #E4E8F0 ;
h4 {
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
}
span {
    cursor: pointer;
}
`;

export const SongDetails = styled.div`
padding: 38px 32px 27px 30px;
label {
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 13px;
}
input {
    width: 100%;
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    margin:10px 0 24px 0;
    padding: 0 12px;
    height: 32px;
    outline: none;
    &::placeholder {
        color: rgba(0, 0, 0, 0.25);
    }
}
button {
    display: flex;
    gap: 8px;
    padding: 8px 16px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 8px;
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    background:  #FFF;

/* drop-shadow / button-secondary */
box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
}
p {
    color: rgba(0, 0, 0, 0.45);
}
`;

export const ImageWrapper = styled.div`
border-radius: 2px;
border: 1px solid #D9D9D9;
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
margin-bottom: 26px;
div {
    display: flex;
    gap: 8px;
}
img {
    width: 48px;
}
p{
    color: rgba(24, 144, 255, 1);
}
span {
    cursor: pointer;
}
`;

export const StyledFooter = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
padding: 16px;
border-top:1px solid #E4E8F0 ;
gap: 8px;
button {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding: 4px 16px;
    border-radius: 2px;
    cursor: pointer;
    &:first-child {
        color: rgba(0, 0, 0, 0.85);
        border: 1px solid #D9D9D9;
        background:  #FFF;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    }
    &:last-child {
        color: rgba(255, 255, 255, 1);
        border: 1px solid #1890FF;
        background:  #1890FF;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    }
}
`;