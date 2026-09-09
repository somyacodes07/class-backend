const express = require('express');
const userRouter = require('./router/userRouter');
require('./config/firebase');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
