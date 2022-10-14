const express = require('express');
const cors = require('cors');
const app = express()
const PORT = 3333

app.use(cors())
app.get('/', (request, response) => {
    response.send('Hello World 2!')
})

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})