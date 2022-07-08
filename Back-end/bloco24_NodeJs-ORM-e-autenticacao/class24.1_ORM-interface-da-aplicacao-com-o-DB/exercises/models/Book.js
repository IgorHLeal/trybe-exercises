const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'Books',
  });
  return Book;
};

module.exports = Book;
