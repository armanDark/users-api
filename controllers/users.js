const { users: UsersService } = require('../services');

class UsersController {
    static async addUser(username, password) {
        const newUser = await UsersService.createUser(username, password);
        return newUser;
    }
    static async getUsers() {
        const users = await UsersService.getAllUsers();
        return users;
    }
    static async getUser(id) {
        const user = await UsersService.getUserById(id);
        return user;
    }
    static async deleteUser(id) {
        const result = await UsersService.deleteUserById(id);
        return result;
    }
    static async editUser(id, username, password) {
        const updatedUser = UsersService.updateUser(id, username, password);
        return updatedUser;
    }
}

module.exports = UsersController;
