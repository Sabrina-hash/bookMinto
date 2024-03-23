import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Notification from '../components/Notification';

const NotificationScreen = () => {

    const [notification, setNotification] = useState(null);
   
  return (
    <>
    
    <h1 style={{ marginBottom: "20px" }}>Notifications</h1>
    {notification && <Notification message= {notification.message} type={notification.type} />}
    
    </>
       
   
  );
};

export default NotificationScreen;