const modelUser = require("../model/users.js");
const {response} = require("../middleware/response.js");

const UsersController = {
    getUser: (req,res,next) => {
        modelUser.getUser()
        .then((result) => {
            response(res,200,true,result.rows,"Get User Success")
        })
        .catch((err) => {
            response(res, 404, false,err,"Get Data User Fail")
        })
    },
    // REGIS
    regisUser: async (req,res,next) => {
        const data = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            car_name: req.body.car_name,
            car_id: req.body.car_id,
          };
        try {
            console.log(data);
        const chekUser = await modelUser.getUserDetail(data.id)
        if (chekUser.rows.length !== 0) {
            console.log(chekUser.rows)
            response(res,404,false,chekUser.rows,"User sudah terdaftar, silahkan login!")
        } else {
            console.log(data);
            const result = await modelUser.addUser(data);
            if (result) {
                response(res,200,true,data,"Success register User")
            }    
        }
        } catch (error) {
            response(res, 404, false,error,"Register Fail")
        }
    },
}

exports.UsersController = UsersController