const conn   = require('./mysql_connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const model = {

    //get all users
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Persons", (err,data) => {
            cb(err,data);
        });
    },
    //select by user id
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Persons WHERE person_id=?", id,(err,data) => {
            cb(err,data[0]);
        });
    },
    //deletes a user (cascades)
    deleteById(id,cb){
        conn.query("DELETE FROM Fitness_Persons WHERE person_id=?", id, (err,data) => {
            cb(err,data);
        });
    },
    //updates passsword for user after authentication this would be used
    changePass(input,cb){
        if(input.password < 8){
            cb(Error('Password must be at least 8 characters'))
        }
        conn.query("UPDATE Fitness_Persons SET password=? WHERE userName =?",[input.password,input.userName],
        (err,data) => {
            if(err) {
                cb(err);
                return; 
            }
            model.get(data.insertId, (err,data) =>{
                cb(err,data);
            });
        });
    },
    //creates a user with a hashed password
    add(input,cb){
        if(input.password.length < 8){
            cb(Error('Password must be at least 8 characters'))
        }
        bcrypt.hash(input.password, saltRounds, function(err,hash){
            conn.query("INSERT INTO Fitness_Persons (created_at,userName,password,firstName,lastName,birthday) VALUES(?)",
            [[new Date(),input.userName,hash,input.firstName,input.lastName,input.birthday]],
            (err,data) => {
                    if(err){
                        cb(err);
                        return;
                    }
                    model.get(data.insertId, (err,data) => {
                        cb(err,data);
                    })
                }
            );
        })
    },
    //authentication 
    login(input,cb){
        conn.query("SELECT password FROM Fitness_Persons WHERE userName=?", [input.userName], 
        (err,data) => {
            if(err){
                cb(err);
                return;
            }
            bcrypt.compare(input.password, data[0].password, (err,data) => {
                    cb(err,data);
                })
        })
    }
}
module.exports = model; 