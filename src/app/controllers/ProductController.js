const Category = require('../models/Category');

module.exports = {
  create(req, res) {
    return res.render("products/create.njk");
  },
  post(req, res) {
    Category.all()
      .then((results) => {
        const categories = results.rows; // vai retornar os registros da tabela de categorias como um array

        return res.render('products/create.njk', { categories });
      })
      .catch((err) => {
        throw new Error(err)}
      );
  }
}