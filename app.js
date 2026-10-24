
const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Prometheus default metrics
client.collectDefaultMetrics();

// Custom HTTP request counter
const httpRequestCounter = new client.Counter({
  name: 'task_manager_http_requests_total',
  help: 'Total HTTP requests received'
});

// Count incoming requests, excluding /metrics
app.use((req, res, next) => {
  if (req.path !== '/metrics') {
    httpRequestCounter.inc();
  }
  next();
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Test route — retain your existing task routes too
app.get('/', (req, res) => {
  res.send('Student Task Manager is runnin');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
