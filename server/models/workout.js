const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Workouts", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Workouts WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_Workouts (created_at,person_id,exercise_id,workout_date,repsDone) VALUES(?)",
            [[new Date(),input.person_id,input.exercise_id,input.workout_date,input.repsDone]],
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