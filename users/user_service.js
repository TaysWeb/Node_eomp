const db = require('../backend/config/db.js');

module.exports = {
  create: (data, callBack) => {
    db.query(
      `insert into Users(emailAdd, userPass) 
                values(?,?)`,
      [
       
        data.email,
        data.password,
 
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    db.query(
      `select * from Users where emailAdd = ?`,
      [email],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    db.query(
      `select userID,  firstname, lastname, userAge, Gender,userRole, emailAdd, userPass,userProfile from Users where userID = ?`,
      [id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    db.query(
      `select userID, firstname, lastname, userAge, Gender,userRole, emailAdd, userPass,userProfile from userID`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    db.query(
      `update Users set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    db.query(
      `delete from Users where userID = ?`,
      [data.id],
      (error, results ) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};