//Dependencies

//GET notes.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  });


//GET index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });