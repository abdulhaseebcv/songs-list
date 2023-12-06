import styled from "styled-components";

export const MainContainer = styled.div`

`;
export const SubHeader = styled.div`
padding: 46px 53px 16px 53px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid rgba(0, 0, 0, 0.06);
h4 {
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
}
button {
    border-radius: 2px;
    background: #FDB927;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
    padding: 5px 16px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    border: transparent;
}
`;
export const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
font-size: 14px;
font-weight: 400;
line-height: 22px; 
background: #fff;
th {
    padding: 40px 0 20px 0;
    text-transform: uppercase;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &:first-child {
    width: 30%;
  }
}

td {
    padding: 6px 0 2px 0;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    width: 20%;
    color: rgba(0, 0, 0, 0.85);
    img {
        width: 70px;
    height: 70px;
    }
    span {
        cursor: pointer;
    }
    &:nth-child(4){
        span {
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: #FDB927;
            border-radius: 50%;
            margin: 0 auto;
        }
    }
  &:first-child {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 17px;
    padding-left: 23px;
  }
}
`;

export const PageNumber = styled.ul`
display: flex;
justify-content: center;
margin-top: 40px;
gap: 15px;
li {
    list-style: none;
}
button {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 2px;
}`;
