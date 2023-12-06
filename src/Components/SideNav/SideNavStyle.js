import styled from "styled-components";

export const SideNavContainer = styled.div`
width: 255px;
height: 100vh;
background: #FFF;
box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.05) inset;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 0 16px 0;
button {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.85);
    border: transparent;
    padding: 9px 0 9px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;    
    span {
        display: flex;
    }
}
`;

export const TopSection = styled.div`
h2 {
    text-align: center;
    color: #552583;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    padding: 32px 0;
}
li {
    color: rgba(24, 144, 255, 1);
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    background: rgba(230, 247, 255, 1);
    padding: 9px 0 9px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    span {
        display: flex;
    }
}
`;

