import React, { useHistory } from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div>NotFound 404</div>
    <div onClick={() => navigate('/')}>Return to Main Page </div>
    </div> 
  )
}
