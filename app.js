const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// for hello
app.get('/', (req, res) => {
    res.send('Hello from server 2 this is hello' );
})

app.get('/api', (req, res) => {
    res.send('Hello from server 2');
})

app.post('/api/data', (req, res) => {
    res.send('Data from server 2 post');
})


app.listen(3000, () => {
    console.log('Server 2 is running on port 80');
})

