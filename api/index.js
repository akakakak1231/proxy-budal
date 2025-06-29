const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://budal12.net/pr_kiss', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const body = await response.text();
    res.status(200).send(body);
  } catch (err) {
    res.status(500).send('Proxy error: ' + err.message);
  }
};
