const { request } = require("express");
const UserController = require("./user.controller");
const UserService = require("../services/user.service");

class UserExpressController extends UserController {
    constructor() {
        super()
    }
    async registration(req, res) {
        try {
            const bodyJson = req.body;
            const userService = new UserService();
            // call service registrasi.
            const registrasi = await userService.registration(bodyJson);

            res.status(201).json({ message: registrasi, status: "success", code: 201 });
        } catch (error) {
            // throw error
            res.status(400).json({ message: error.message, status: "fail", code: 400 });
        }
    }

    async login(req, res) {
        try {
            const bodyJson = req.body;
            const userService = new UserService();
            // call service login.
            const login = await userService.login(bodyJson);

            res.status(201).json({ message: login, status: "success", code: 201 });
        } catch (error) {
            // throw error
            res.status(401).json({ message: error.message, status: "fail", code: 401 });
        }
    }
}

module.exports = UserExpressController;
