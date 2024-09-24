const db = require('../models/database');

exports.updateProfile = (req, res) => {
  const { name, email, password } = req.body;
  db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', 
    [name, email, req.user.id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Profile updated');
  });
};

exports.getProfile = (req, res) => {
  db.get('SELECT * FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err) return res.status(500).send(err.message);
    res.send(user);
  });
};
