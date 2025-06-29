// index.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://budal12.net/pr_kiss', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const body = await response.text();
    res.send(body);
  } catch (e) {
    res.status(500).send('Proxy error');
  }
});

module.exports = app;
