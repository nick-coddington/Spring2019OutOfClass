const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_ContactMethods", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_ContactMethods WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_ContactMethods (created_at,person_id,contact_type,contact_value) VALUES(?)",
            [[new Date(),input.person_id,input.contact_type,input.contact_value]],
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