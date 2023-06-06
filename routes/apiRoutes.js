//Dependencies

//GET
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//POST
app.post('/api/notes', (req, res) => {});

//DELETE
app.delete('api/notes/id:', (req, res) => {});
