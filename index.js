const app = require('./src/server.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`);
})
