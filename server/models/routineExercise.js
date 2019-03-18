const conn = require('./mysql_connection');

const model = {
    //this gives us all of the connections between exercises and routines
    getAll(cb){
        conn.query("SELECT * FROM Fitness_RoutineExercises", (err,data) => {
            cb(err,data);
        });
    },
    //this gets us the routine with the workouts and the default reps/sets
    get(input, cb){
        conn.query("SELECT DISTINCT routineName,exerciseName,defaultReps,defaultSets FROM Fitness_Routines join Fitness_RoutineExercises join Fitness_Exercises where routine_id=?", input.routine_id, (err,data) => {
            cb(err,data);
        });
    },
    //add a connection between a specific routine and a specific exercise
    add(input,cb){
        conn.query("INSERT INTO Fitness_RoutineExercises (created_at,Fitness_Routines_routine_id,Fitness_Exercises_exercise_id) VALUES(?)",
            [[new Date(),input.Fitness_Routines_routine_id,input.Fitness_Exercises_exercise_id]],
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