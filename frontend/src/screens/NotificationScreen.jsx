import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Notification from '../components/Notification';
import axios from 'axios';

const NotificationScreen = () => {

    // const notifications = useSelector(state => state.notifications);

    const [notification, setNotifications] = useState([]);

    useEffect(() => {

      const fetchNotifications = async () => {
        try {
          const response = await axios.get('/api/notifications');
          console.log('Notification data:', response.data);
          setNotifications(response.data);
        } catch (error) {
          console.error('Error fetching notifcations:', error);
        }
      };

      fetchNotifications();
    }, []);

    console.log('Notifications:', notification);
   
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

      {Array.isArray(notification) && notification.map((notification)  => ( 
        <div key={notification._id} className="notfic_card unread">
          <img src="./assets/styles/logo.png" alt="profilepicture" />
        <div className="description">
          <p className="user_activity">
            <strong>{notification.userName}</strong> has {notification.action} <em>{notification.listingName}</em>
          </p>
          <p className="time">{notification.time} ago</p>
        </div>
      </div>
        ))}
      </div>
      </main>
      </div>


/*


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

*/
    
   
    
   
  );
};

export default NotificationScreen;