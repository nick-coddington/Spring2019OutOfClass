const conn = require('./mysql_connection');

const model = {
    //get all the workouts done
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Workouts", (err,data) => {
            cb(err,data);
        });
    },
    //get a certain workout by person id
    get(id,cb){
        conn.query("SELECT * FROM Fitness_Workouts WHERE Fitness_Persons_person_id=?", id, (err,data) => {
            cb(err,data);
        });
    },
    //delete a specific workout by person id and exercise id
    delete(input,cb){
        conn.query("DELETE FROM Fitness_Workouts WHERE Fitness_Persons_person_id=? AND Fitness_Exercises_exercise_id=? ",
        [input.Fitness_Persons_person_id,input.Fitness_Exercises_exercise_id], (err,data) =>{
            cb(err,data);
        })
    },
    //add a workout
    add(input,cb){
        conn.query("INSERT INTO Fitness_Workouts (created_at,workout_date,repsDone,setsDone,Fitness_Exercises_exercise_id,Fitness_Persons_person_id) VALUES(?)",
            [[new Date(),new Date(),input.repsDone,input.setsDone,input.Fitness_Exercises_exercise_id,input.Fitness_Persons_person_id]],
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