//Dependencies
const app = express();

//GET notes.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/assets/notes.html'));
});

//GET index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/assets/index.html'));
});
