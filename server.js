const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));



// Require the controller after the middleware
const goalsController = require('./controllers/goalsController');
const authController  = require('./controllers/authController');

// app.use('/api/v1/restaraunt', restarauntController);
// app.use('/auth', authController);

app.use('/api/v1/goals', goalsController);
// app.use('/auth/login', authController);



app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
