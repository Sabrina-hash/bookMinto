import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Notification from '../components/Notification';

const NotificationScreen = () => {

    const notifications = useSelector(state => state.notifications);

    const [notification, setNotification] = useState(null);
   
  return (


    <div>
      <header>
        <div className="notif_box">
          <h1 style={{ marginBottom: "20px" }}>Notifications</h1>
          <span id="notifications"></span>
        </div>
      </header>

  <main>
    <div className="notificationcontainer">
      <div className="notfic_card unread">
        <img src="./assets/styles/logo.png" alt="profilepicture" />
        <div className="description">
          <p className="user_activity">
            <strong>User Name</strong> has favorited <em>Listing name</em>
          </p>
          <p className="time">1m ago</p>
        </div>
      </div>
    </div>
  </main>
</div>


    
   
    
   
  );
};

export default NotificationScreen;