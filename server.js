const { name } = require('ejs');
const express= require('express');
const path= require('path');
const app = express();
const port= 8000;
const file= path.resolve(__dirname, 'index.html');


app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.set('views', view);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/project', project);

app.get('/', (req, res) => {
    res.sendFile(file);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function project(req, res) {
    res.render('index.ejs');
}
