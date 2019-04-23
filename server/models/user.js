const conn   = require('./mysql_connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'some long string..';

const model = {

    //get all users
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_Persons");
    },

    async getName(input){
        const data = await conn.query("SELECT firstName, lastName FROM Fitness_Persons WHERE person_id=?", input.person_id);
        return data;
    },
    //select by user id
    async get(input){
        const data = await conn.query("SELECT person_id FROM Fitness_Persons WHERE userName=?", input.userName);
        if(!data) {
            throw Error("User not found")
        }
        return data[0];
    },
    //deletes a user (cascades)
    async deleteById(id) {
        return await conn.query("DELETE FROM Fitness_Persons WHERE person_id=?", id);
    },
    //creates a user with a hashed password
    async add(input){
        if(!input.password) {
            throw Error('Password is Required.')
        }
        if(input.password.length < 8){
            throw Error('Password must be at least 8 characters');
        }
        const hashedPassword = await bcrypt.hash(input.password, saltRounds)
        const data = await conn.query(
            "INSERT INTO Fitness_Persons (created_at,userName,password,firstName,lastName,birthday) VALUES(?)",
            [[new Date(),input.userName,hashedPassword,input.firstName,input.lastName,input.birthday]]
            );
            return await model.get(data.insertId);
    },
    getFromToken(token) {
        return jwt.verify(token, JWT_SECRET);
    },
    //authentication 
    async login(userName, password) {
        const data = await conn.query(`SELECT * FROM Fitness_Persons WHERE userName=?`, userName);
        if(data.length == 0) {
            throw Error('User not found')
        }
        const x = await bcrypt.compare(password, data[0].password);
        if(x) {
            const user = {...data[0], password: null};
            return {user, token: jwt.sign(user, JWT_SECRET) };
        } else {
            throw Error('Wrong Password')
        }
    },
    //updates passsword for user after authentication this would be used
    async changePassword(userName, oldPassword, newPassword) {
        const data = await conn.query(`SELECT * FROM Fitness_Persons WHERE userName=?`, userName);
        if(data.length == 0) {
            throw Error('User not Found')
        }
        if(data[0].password == "" || await bcrypt.compare(oldPassword, data[0].password)) {
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            await conn.query(`UPDATE Fitness_Persons SET password=? WHERE userName=?`, [hashedPassword, userName]);
        return {status: "success", message: "Password Successfully Changed"};
        } else {
            throw Error('Wrong Password')
        }
    }
};
module.exports = model; 