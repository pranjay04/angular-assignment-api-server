const user_schema_model = require('../schema/UserSchema');

function createUser(data) {
  return new Promise((resolve, reject) => {
    user_schema_model.create(
      {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    user_schema_model.find(
      {},
      {
        password: 0,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function deleteUserById(id) {
  return new Promise((resolve, reject) => {
    user_schema_model.findByIdAndDelete(id, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function updateUser(data) {
  return new Promise((resolve, reject) => {
    user_schema_model.findByIdAndUpdate(
      data._id,
      {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUserById,
  updateUser,
};
