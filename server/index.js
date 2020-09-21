const app = require('./server');
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});