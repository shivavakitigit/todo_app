const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const db = require('../models/database');

exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const userId = uuidv4();

  db.run('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', 
    [userId, name, email, hashedPassword],
    function (err) {
      if (err) return res.status(500).send(err.message);
      const token = jwt.sign({ id: userId }, 'your_jwt_secret_key');
      res.send({ token });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err || !user) return res.status(400).send('Email not found');
    const validPass = bcrypt.compareSync(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret_key');
    res.send({ token });
  });
};
