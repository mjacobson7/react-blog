module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db');
    db.query('SELECT * FROM injuries').then((injuries) => {
      console.log(injuries);
      res.status(200).json(injuries);
    }).catch(() => res.status(500).send());
  }
} //end 
