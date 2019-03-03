const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Exercises", (err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Exercises WHERE Id=?", (err,data) => {
            cb(err,data[0]);
        });
    },
    add(input,cb){
        conn.query("INSERT INTO Fitness_Exercises (created_at,exerciseName,defaultReps,exerciseDescription) VALUES(?)",
            [[new Date(),input.exerciseName,input.defaultReps,input.exerciseDescription]],
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