const express = require('express');
const app = express();
// const session = require('express-session');

/*************************************************************************
                            App Configuration
**************************************************************************/
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));
// app.use(session({
//   secret: process.env.SECRET_KEY || 'dev',
//   resave: true,
//   saveUninitialized: false,
//   cookie: {maxAge: 600000}
// }));

/*****************************************************************************
                                  App Routes
******************************************************************************/
app.get('/', (req, res) => {
  res.render('index.hbs', {title: 'Trust me.'});
});

app.listen(8000, function() {
  console.log(`Listening on port 8000`);
});
