import React, { useEffect, useState } from 'react';
import { LoginContainer, PageContainer, PhoneNumberWrapper, StyledButton, StyledFlagInput, StyledInputField, StyledText, StyledTitle } from './LoginStyle';
import axios from '../../Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // State variables for managing country code and phone number
    const [country, setCountry] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Loading state
    const [loading, setLoading] = useState(false);

    // Hook to enable navigation within the application
    const navigate = useNavigate();

    // Function to handle the login process
    const handleLogin = () => {

        // Check if the phone number is not empty
        if (!phoneNumber.trim()) {
            toast.error("Phone number is required");
        } else {
            // Set loading to true when the login process starts
            setLoading(true);

            // Make a POST request to the server for phone number verification
            axios.post('auth/login', {
                phoneNumber: `${country}${phoneNumber}`
            })
                .then((response) => {
                    console.log('result=>', response?.data);
                    // Display a success message
                    toast.success(response?.data?.message);

                    // Save user information in local storage
                    const userInfo = {
                        phoneNumber: `${country}${phoneNumber}`,
                        requestId: response?.data?.requestId
                    };
                    localStorage.setItem('user-info', JSON.stringify(userInfo));

                    // Redirect to the OTP verification page after a delay
                    setTimeout(() => {
                        navigate('/login/verify');
                    }, 1000);
                })
                .catch((error) => {
                    console.log("error=>", error?.response?.data);
                    // Display a error message when request fails
                    toast.error(error?.response?.data?.message);
                })
                .finally(() => {
                    // Set loading back to false, regardless of success or failure
                    setLoading(false);
                });
        }
    };


    useEffect(() => {

        // Checking if a token is present in local storage
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <PageContainer>
            <LoginContainer>
                <StyledTitle>Sign In</StyledTitle>
                <StyledText>Please enter your mobile number to login. We will send an OTP to verify your number.</StyledText>
                <PhoneNumberWrapper>
                    <StyledFlagInput
                        international
                        defaultCountry="IN"
                        value={country}
                        onChange={setCountry}
                        onFocus={(e) => e.target.blur()}
                    />
                    <StyledInputField
                        type='tel'
                        placeholder='Phone number'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </PhoneNumberWrapper>
                <StyledButton onClick={handleLogin} disabled={loading}>Sign In</StyledButton>
            </LoginContainer>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={true}
                closeButton={false}
            />
        </PageContainer>
    );
}

export default Login;
