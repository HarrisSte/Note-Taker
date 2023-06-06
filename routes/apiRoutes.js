//Dependencies

//GET
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//POST
app.post('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, db.json));
});

//DELETE
//BONUS
app.delete('api/notes/id:', (req, res) => {});
