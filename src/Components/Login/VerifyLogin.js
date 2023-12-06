import React, { useEffect, useRef, useState } from 'react'
import { LinkWrapper, LoginContainer, OtpContainer, OtpInput, PageContainer, StyledButton, StyledLink, StyledText, StyledTitle } from './LoginStyle'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../Config';

const VerifyLogin = () => {

    // State variable to store user details
    const [userDetails, setUserDetails] = useState({});

    // Loading state
    const [loading, setLoading] = useState(false);

    // State variable to store OTP input values (initially set to an array of four empty strings)
    const [otpValues, setOtpValues] = useState(['', '', '', '']);

    // Array of refs to store references to the OTP input elements
    const otpInputsRefs = [useRef(), useRef(), useRef(), useRef()];

    // Hook to enable navigation within the application
    const navigate = useNavigate();


    // Function to handle OTP input changes
    const handleOtpChange = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        if (value && index < otpInputsRefs.length - 1) {
            // If backspace is pressed and the current input is empty, focus on the next input
            otpInputsRefs[index + 1].current.focus();
        } else if (!value && index > 0) {
            // If backspace is pressed and the current input is empty, focus on the previous input
            otpInputsRefs[index - 1].current.focus();
        }
    }

    // Function to handle OTP verification
    const handleVerifyOtp = () => {
        // Check if each value in otpValues is a single digit
        const isOtpValid = otpValues.every(value => /^\d$/.test(value));
        if (isOtpValid) {
            console.log("userDetails==", userDetails);
            // Combine individual digits to form the complete OTP
            const otp = otpValues.join('');

            // Set loading to true when the login process starts
            setLoading(true);

            // Make a POST request to verify the OTP
            axios.post('auth/verify_otp', {
                phoneNumber: userDetails.phoneNumber,
                requestId: userDetails.requestId,
                otp
            })
                .then((response) => {
                    console.log('result=>', response?.data);
                    // Display success message
                    toast.success('Success');

                    // Save the token in local storage
                    localStorage.setItem('token', response?.data?.token);

                    // Redirect to the home page after a delay
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                })
                .catch((error) => {
                    console.log("error=>", error?.response?.data);
                    // Display an error message if OTP verification fails
                    toast.error(error?.response?.data?.message);
                })
                .finally(() => {
                    // Set loading back to false, regardless of success or failure
                    setLoading(false);
                });
        } else {
            console.log('Invalid OTP. Please enter valid numbers.');
            // Display an error message if OTP is invalid
            toast.error('Invalid OTP. Please enter valid numbers.');
        }
    }

    // Function to handle OTP resend
    const handleResendOtp = () => {
        // Make a POST request to initiate OTP resend
        axios.post('auth/login', {
            phoneNumber: userDetails.phoneNumber
        })
            .then((response) => {
                console.log('result=>', response?.data);
                // Display success message
                toast.success(response?.data?.message);

                // Update user details with the new requestId
                const updatedUserInfo = {
                    ...userDetails,
                    requestId: response?.data?.requestId
                };
                localStorage.setItem('user-info', JSON.stringify(updatedUserInfo));
                setUserDetails(updatedUserInfo);

            })
            .catch((error) => {
                console.log("error=>", error?.response?.data);
                // Display an error message if OTP resend fails
                toast.error(error?.response?.data?.message);
            });
    }

    useEffect(() => {
        // Focus on the first input when the component is mounted
        otpInputsRefs[0].current.focus();
    }, []);

    useEffect(() => {
        // Retrieve user details from local storage when the component mounts
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        setUserDetails(userInfo)
    }, []);

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
                <StyledTitle>OTP Verification</StyledTitle>
                <StyledText>{`We have sent and OTP to ${userDetails?.phoneNumber}. Please enter the code received to verify.`}</StyledText>
                <OtpContainer>
                    {otpValues.map((value, index) => (
                        <OtpInput
                            key={index}
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            ref={otpInputsRefs[index]}
                            maxLength={1}
                        />
                    ))}
                </OtpContainer>
                <StyledButton onClick={handleVerifyOtp} disabled={loading}>Verify</StyledButton>
                <LinkWrapper>
                    <StyledLink onClick={handleResendOtp} disabled={loading}>Resend OTP</StyledLink>
                    <StyledLink to='/login' className={StyledLink}>Use another number</StyledLink>
                </LinkWrapper>
            </LoginContainer>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={true}
                closeOnClick
            />
        </PageContainer>
    )
}

export default VerifyLogin