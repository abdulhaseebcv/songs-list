import React, { useCallback } from 'react'
import { SideNavContainer, TopSection } from './SideNavStyle'
import { CiBoxList } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = useCallback(() => {
    // Remove stored data on logout
    localStorage.removeItem('songs');
    localStorage.removeItem('user-info');
    localStorage.removeItem('token');

    // Navigate to the login page after logout
    navigate('/login');
  }, [navigate]);
  return (
    <SideNavContainer>
      <TopSection>
        <h2>Logo</h2>
        <ul>
          <li><span><CiBoxList /></span>Songs</li>
        </ul>
      </TopSection>
      <button onClick={handleLogout}><span><RiLogoutCircleRLine /></span>Logout</button>
    </SideNavContainer>
  )
}

export default SideNav