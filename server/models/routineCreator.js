const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_RoutineCreator", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_RoutineCreator WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_RoutineCreator (created_at,person_id,routine_id) VALUES(?)",
            [[new Date(),input.person_id,input.routine_id]],
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