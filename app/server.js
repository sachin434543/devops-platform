const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send("CI/CD Auto Deployment Working 🚀");
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

