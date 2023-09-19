const express = require('express');
const app = express();
const cors = require('cors')

const productRouter = require('./routes/productRoutes');

app.use(cors());
app.use('/products', productRouter);

app.listen(443, () => console.log('Listening on port 443'));
