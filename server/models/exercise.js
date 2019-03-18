const conn = require('./mysql_connection');

const model = {
    //listing all the exercises
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Exercises", (err,data) => {
            cb(err,data);
        });
    },
    //get information for a single exercise
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Exercises WHERE exercise_id=?", id, (err,data) => {
            cb(err,data[0]);
        });
    },
    //delete an exercise
    deleteExercise(id,cb){
        conn.query("DELETE FROM Fitness_Exercises WHERE exercise_id=?", id, (err,data) =>{
            cb(err,data);
        })
    },
    //change the default reps by exercise name
    changeReps(input,cb){
        conn.query("UPDATE Fitness_Exercises SET defaultReps=? WHERE exerciseName=?", [input.defaultReps, input.exerciseName],
        (err,data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err,data) =>{
                cb(err,data);
            })
        })
    },
    //change the default sets by exercise name
    changeSets(input,cb){
        conn.query("UPDATE Fitness_Exercises SET defaultSets=? WHERE exerciseName=?", [input.defaultSets, input.exerciseName],
        (err,data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err,data) =>{
                cb(err,data);
            })
        })
    }, 
    //adding an exercise to the database
    add(input,cb){
        conn.query("INSERT INTO Fitness_Exercises (created_at,exerciseName,defaultReps,defaultSets,exerciseDescription) VALUES(?)",
            [[new Date(),input.exerciseName,input.defaultReps,input.defaultSets,input.exerciseDescription]],
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