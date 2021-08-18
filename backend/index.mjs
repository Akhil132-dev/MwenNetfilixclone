import express from 'express'
const app = express();
const port = process.env.PORT || 9090;
app.listen(port, () => console.log(`Listening on ${port}`));