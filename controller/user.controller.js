const userModel = require(`../models/index`).user;
const Op = require(`sequelize`).Op;

exports.getAlluser = async (request, response) => {
  let users = await userModel.findAll();
  return response.json({
    success: true,
    data: users,
    message: `All users have been loaded`,
  });
};

exports.finduser = async (request, response) => {
  let keyword = request.body.keyword;
  let users = await userModel.findAll({
    where: {
      [Op.or]: [
        { id : { [Op.substring]: keyword } },
        { nama_user : { [Op.substring]: keyword } },
        { role : { [Op.substring]: keyword } },
      ],
    },
  });
  return response.json({
    success: true,
    data: users,
    message: `All users have been loaded`,
  });
};

exports.adduser = (request, response) => {
  let newuser = {
    nama_user: request.body.nama_user,
    role : request.body.role,
    username : request.body.username,
    password : request.body.password,
  };
  userModel
    .create(newuser)
    .then((result) => {
      return response.json({
        success: true,
        data: result,
        message: `New user has been inserted`,
      });
    })
    .catch((error) => {
      return response.json({
        success: false,
        message: error.message,
      });
    });
};

exports.updateuser = (request, response) => {
  let datauser = {
    nama_user: request.body.nama_user,
    role: request.body.role,
    username: request.body.username,
    password : request.body.password,
  };
  let iduser = request.params.id;
  userModel
    .update(datauser, { where: { id: iduser } })
    .then((result) => {
      return response.json({
        success: true,
        message: `Data user has been updated`,
      });
    })
    .catch((error) => {

      return response.json({
        success: false,
        message: error.message,
      });
    });
};

exports.deleteuser = (request, response) => {
  let iduser = request.params.id;
  userModel
    .destroy({ where: { id: iduser } })
    .then((result) => {
      return response.json({
        success: true,
        message: `Data user has been updated`,
      });
    })
    .catch((error) => {
      return response.json({
        success: false,
        message: error.message,
      });
    });
};
