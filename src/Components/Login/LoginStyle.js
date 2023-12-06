import styled from 'styled-components'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';


export const PageContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const LoginContainer = styled.div`
width: 410px;
`;

export const StyledTitle = styled.h3`
color: rgba(85, 37, 131, 1);
font-size: 38px;
font-weight: 500;
margin-bottom: 10px;
`;

export const StyledText = styled.p`
color: rgba(16, 25, 32, 1);
width: 100%;
font-size: 12px;
font-weight: 400;
margin-bottom: 15px;
`;

export const PhoneNumberWrapper = styled.div`
border-radius: 8px;
border: 1px solid #E4E8F0;
width: 98%;
display: flex;
gap: 4px;
padding: 18px 0 15px 25px;
margin-bottom: 25px;
`;

export const StyledFlagInput = styled(PhoneInput)`
width: 80px;
input{
    outline: none;
    border: none;
    cursor: not-allowed;
    pointer-events: none;
    font-size: 18px;
    font-weight: 400;
}
`;

export const StyledInputField = styled.input`
width: 100%;
outline: none;
border: none;
font-size: 18px;
font-weight: 400;
`;

export const StyledButton = styled.button`
border-radius: 12px;
border: transparent;
background: rgba(85, 37, 131, 1);
font-size: 18px;
color: #fff;
font-weight: 700;
width: 100%;
padding: 15px 0;
cursor: pointer;
margin-bottom: 25px;
`;

export const OtpContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;


export const OtpInput = styled.input`
width: 77px;
height: 77px;
border-radius: 8px;
border: 1px solid #E4E8F0;
/* outline: none; */
caret-color: transparent;
text-align: center;
font-size: 20px;
`;

export const LinkWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const StyledLink = styled(Link)`
color: rgba(16, 25, 32, 1);
font-family: 'Helvetica',sans-serif;
font-size: 16px;
font-weight: 300;
text-decoration-line: underline;
margin-bottom: 16px;
`