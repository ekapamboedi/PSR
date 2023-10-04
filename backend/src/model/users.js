const pool = require('../config/postgre.js');

const addUser = (data) => {
    const { id, name, email, password, car_name, car_id} = data;
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO "users" (id,name,email,password,car_name,car_id) VALUES(${id},'${name}','${email}','${password}','${car_name}','${car_id}')`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  const getUser = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM "users"`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  };
  
  const deleteBook = (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM "users" WHERE id = ${id}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  const getUserDetail = (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM "users" where id = ${id}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  }

  module.exports = {addUser,deleteBook,getUser,getUserDetail};