import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS stylesheet here

const App = () => {
  const [inksheds, setInksheds] = useState([]);
  const [newInkshed, setNewInkshed] = useState('');

  useEffect(() => {
    // Fetch Inksheds on initial load
    axios.get('http://localhost:3001/api/inksheds')
      .then((response) => {
        setInksheds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Inksheds:', error);
      });
  }, []);

  const handleInkshedSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to create a new Inkshed
    axios.post('http://localhost:3001/api/inksheds', { content: newInkshed })
      .then((response) => {
        // Update the list of Inksheds
        setInksheds([...inksheds, response.data]);
        // Clear the input field
        setNewInkshed('');
      })
      .catch((error) => {
        console.error('Error creating Inkshed:', error);
      });
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Inkshedding</h1>

      <form onSubmit={handleInkshedSubmit} className="inkshed-form">
        <textarea
          className="inkshed-input"
          placeholder="Write your Inkshed..."
          value={newInkshed}
          onChange={(e) => setNewInkshed(e.target.value)}
        />
        <button type="submit" className="inkshed-button">Post</button>
      </form>

      <div className="inksheds-container">
        {inksheds.map((inkshed) => (
          <div key={inkshed.id} className="inkshed-card">
            <p className="inkshed-content">{inkshed.content}</p>
            
            <div className="comments-container">
              {/* Add comments here */}
            </div>
            
            {/* <form className="comment-form">
              <input className="comment-input" placeholder="Add a comment..." />
              <button type="submit" className="comment-button">Comment</button>
            </form> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

