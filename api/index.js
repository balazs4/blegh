module.exports = (req, res) => {
  const body = JSON.stringify({ ...req.query, now: Date.now() });
  res.writeHead(200, { 'content-type': 'application/json' }).end(body);
};
