// const { name } = require('ejs');
// const express= require('express');
// const path= require('path');
// const app = express();
// const port= 5500;
// const file= path.resolve(__dirname, 'index.html');


// app.use('/static', express.static('static'));
// app.set('view engine', 'ejs');
// app.set('views', 'view');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// app.get('/project/gardencmd', (req, res) => {
//     res.render('index.ejs');
// });

// app.get('/', (req, res) => {
//     res.sendFile(file);
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// function project(req, res) {
//     res.render('index.ejs');
// }

const express = require('express');
const path = require('path');
const app = express();
const port = 5500;
const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;
const client= new MongoClient(uri);

async function connect() {
  try {
      await client.connect();
      console.log('Connected to the database');
  } catch (error) {
      console.log(error);
  }
}

app.post('/contact_verzoek', async (req, res) => {
  try {
      const database = client.db(process.env.NAME_DB);
      const usersCollection = database.collection('contacts');
      
      const newContact = {
          company: req.body.company,
          name: req.body.name,
          email: req.body.email,
          message : req.body.message
      };
      await usersCollection.deleteMany({});
      await usersCollection.insertOne(newUser);
      console.log('New user inserted:', newUser);
      getData(req, res);
      res.render('index.html');
  } catch (error) {
      console.error('Error inserting new user:', error);
      res.status(500).send('Error inserting new user');
  }
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for project pages
app.get('/project/:projectName', (req, res) => {
  const projectName = req.params.projectName;
  res.sendFile(path.join(__dirname, 'projects', `${projectName}.html`));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://185.199.108.153:${port}`);
});



// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 5501;

// // Set EJS as the template engine
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for the home page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Route for project pages
// app.get('/project/:projectName', (req, res) => {
//   const projectName = req.params.projectName;
//   res.render(projectName);
// });

// // Start the server
// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server is running at http://185.199.108.153:${port}`);
// });