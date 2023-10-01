import React, { useState, useEffect } from 'react';

const Alerts = () => {
  const [ipAddress, setIpAddress] = useState('Loading...');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Function to fetch the IP address
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const ip = data.ip;
        setIpAddress(ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
        setIpAddress('Unknown'); // Display 'Unknown' in case of an error
      }
    };

    // Call the fetchIpAddress function when the component mounts
    fetchIpAddress();
  }, []);

  useEffect(() => {
    // Function to handle new message arrivals (simulated in this example)
    const handleNewMessage = (message) => {
      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, message]);

      // Check if the Notification API is available
      if ('Notification' in window && Notification.permission === 'granted') {
        // Display a notification
        new Notification('New Message', { body: message });
      }
    };

    // Simulate new message arrivals (you would replace this with your actual message handling logic)
    const simulateNewMessages = () => {
      setInterval(() => {
        const randomMessage = `New Message ${Math.random()}`;
        handleNewMessage(randomMessage);
      }, 5000); // Simulate new messages every 5 seconds
    };

    simulateNewMessages();
  }, []);

  // Request notification permission when the component mounts
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="dark:text-white mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div>
        <h1>I am Alerts and Notifications</h1>
        <p>Your IP Address is: {ipAddress}</p>
        {/* You can style and format the IP address display as needed */}
      </div>
      <div>
        <h2>Chat Messages</h2>
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
