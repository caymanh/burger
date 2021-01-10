// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
  selectAll(tableInput) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne(table, col, valOfCol) {
    const queryString = "INSERT INTO ?? (?) VALUES (?)";
    connection.query(queryString, [table, col, valOfCol], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne() {
    const queryString = "UPDATE ?? SET ? = ? WHERE id = ?";
    connection.query(
      queryString,
      [selectTable, colToUpdate, colVal, idBurger],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

// Export the orm object for the model.
module.exports = orm;
