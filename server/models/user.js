const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Persons", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Persons WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    deleteById(id,cb){
        conn.query(`DELETE FROM Fitness_Persons WHERE Id= ?`, (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_Persons (created_at,password,firstName,lastName,birthday) VALUES(?)",
            [[new Date(),input.password,input.firstName,input.lastName,input.birthday]],
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
    }
};
module.exports = model; 