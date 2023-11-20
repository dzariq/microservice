const express = require('express');
const app = express()
const cors = require('cors')
const proxy = require('express-http-proxy')

app.use(express.json());
app.use(cors());

app.use('/customer',proxy('http://localhost:8001'))
app.use('/shopping',proxy('http://localhost:8003'))
app.use('/products',proxy('http://localhost:8002'))

app.listen(8000, () => {
    console.log(`listening to port 8000`);
})
