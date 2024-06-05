const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/execute', (req, res) => {
    const scriptContent = req.body.script;

    // URL of your Roblox game server
    const robloxServerUrl = 'https://game-server-url.com/execute-script';

    axios.post(robloxServerUrl, { script: scriptContent })
        .then(response => {
            res.json({ success: true });
        })
        .catch(error => {
            res.json({ success: false, error: error.message });
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
