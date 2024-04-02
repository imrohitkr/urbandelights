const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');


const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// POST route to handle review submission
// POST route to handle review submission
// POST route to handle review submission
app.post('/postReview', (req, res) => {
    const { reviewText } = req.body;

    // Spawn a Python process
    const pythonProcess = spawn('python', ['../Backend/script.py']);

    // Send reviewText to the Python process
    pythonProcess.stdin.write(reviewText + '\n');
    pythonProcess.stdin.end();

    let pythonOutput = '';

    // Handle output from the Python process
    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
        console.log(pythonOutput)
    });

    // Handle errors from the Python process
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        res.status(500).send('Error processing review text');
    });

    // When the Python process finishes
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            // If the process exits successfully, send the output to the client
            res.json({ pythonOutput });
        } else {
            res.status(500).send('Error processing review text');
        }
    });
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
