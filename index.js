const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/demoVerify', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res)=> {
  const user = ({ message: " this is the server page"})

  try {
    res.send(user)
  } catch (error) {
    console.error(error)
  }
  

})





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
