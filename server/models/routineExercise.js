const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_RoutineExercises", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_RoutineExercises WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_RoutineExercises (created_at,exercise_id,routine_id) VALUES(?)",
            [[new Date(),input.exercise_id,input.routine.id]],
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