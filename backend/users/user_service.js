const db = require('../config/db.js');

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
      `update Users set  userID=?,firstname=?, lastName=?, userAge=?, Gender=?, userRole=?, emailAdd=?, userPass=?, userProfile=? where userID = ?`,
      [
    
        data.firstname,
        data.lastname,
        data.userAge,
        data.Gender,
        data.userRole ,
        data.emailAdd,
        data.userPass,
        data.userProfile,
        data.userID ,
      ],
      (error, results) => {
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