const conn = require('./mysql_connection');

const model = {
    //get all available routines
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Routines", (err,data) => {
            cb(err,data);
        });
    },
    //get a specific routine by id
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Routines WHERE routine_id=?", id, (err,data) => {
            cb(err,data[0]);
        });
    },
    //delete a routine by name
    deleteRoutine(input, cb){
        conn.query("DELETE FROM Fitness_Routines WHERE routineName=?", input.routineName, (err,data) => {
            cb(err,data);
        })
    },
    //add a new routine
    add(input,cb){
        conn.query("INSERT INTO Fitness_Routines (created_at,routineName,routineDescription) VALUES(?)",
            [[new Date(),input.routineName,input.routineDescription]],
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