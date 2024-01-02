// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Create a new SQLite database (or open an existing one)
const db = new sqlite3.Database('inkshedding.db', (err) => {
  if (err) {
    console.error('Database error:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create the 'inksheds' table
    db.run(`
      CREATE TABLE IF NOT EXISTS inksheds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});


// Insert a new Inkshed into the database
app.post('/api/inksheds', (req, res) => {
    const { content } = req.body;
  
    // Add the Inkshed to the 'inksheds' table
    const sql = 'INSERT INTO inksheds (content) VALUES (?)';
    
    db.run(sql, [content], function (err) {
      if (err) {
        console.error('Error inserting Inkshed:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Response indicating success, along with the ID of the newly inserted Inkshed
        res.status(201).json({ id: this.lastID, content });
      }
    });
  });

// Retrieve all Inksheds
app.get('/api/inksheds', (req, res) => {
    const sql = 'SELECT * FROM inksheds';
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Error retrieving Inksheds:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(rows);
      }
    });
  });
  
  // Retrieve an Inkshed by ID
  app.get('/api/inksheds/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM inksheds WHERE id = ?';
  
    db.get(sql, [id], (err, row) => {
      if (err) {
        console.error('Error retrieving Inkshed:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (row) {
          res.status(200).json(row);
        } else {
          res.status(404).json({ error: 'Inkshed not found' });
        }
      }
    });
  });

  // Update an Inkshed by ID
app.put('/api/inksheds/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const sql = 'UPDATE inksheds SET content = ? WHERE id = ?';
  
    db.run(sql, [content, id], function (err) {
      if (err) {
        console.error('Error updating Inkshed:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ id, content });
      }
    });
  });

  // Delete an Inkshed by ID
app.delete('/api/inksheds/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM inksheds WHERE id = ?';
  
    db.run(sql, [id], function (err) {
      if (err) {
        console.error('Error deleting Inkshed:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(204).send(); // No content (successful deletion)
      }
    });
  });

// Deleting all records EXPERIMENTAL
app.delete('/api/inksheds/delete-all', (req, res) => {
  db.run('DELETE FROM inksheds', (err) => {
    if (err) {
      console.error('Error deleting records:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'All records deleted successfully' });
    }
  });
});

  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
