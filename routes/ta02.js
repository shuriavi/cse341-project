//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const names = ['Jeremy', 'Sadie', 'Bodey', 'Liz'];
const errors = [];

router.post('/addUser', (req, res, next) => {
  names.push(req.body.addUser);
  res.writeHead(302, { Location: '/ta02/' });
  res.end();
});

router.post('/removeUser', (req, res, next) => {
  if (names.includes(req.body.deleteUser)){
    position = names.indexOf(req.body.deleteUser);
    names.splice(position, 1);
  }
  else 
    errors.push("Username was not found")
  res.writeHead(302, { Location: '/ta02/' });
  res.end();
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: names,
    errors: errors
  });
});

// Display an error message if a username is not found for removal.

// Prevent duplicate insertions and display an error message.

module.exports = router;
