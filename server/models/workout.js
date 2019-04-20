const conn = require('./mysql_connection');

const model = {
    //get all the workouts done
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_Workouts");
    },

    //get a certain workout by person id
    async get(input){
        const data = await conn.query("SELECT * FROM Fitness_Workouts INNER JOIN Fitness_Exercises ON Fitness_Workouts.Fitness_Exercises_exercise_id=Fitness_Exercises.exercise_id WHERE Fitness_Persons_person_id=?", input.Fitness_Persons_person_id);
        if(!data) {
            throw Error('No workouts have been added')
        }
        return data;
    },

    //delete a specific part of a workout by person id and exercise id
    async delete(id) {
        return await conn.query("DELETE FROM Fitness_Workouts WHERE workout_id=?", id);
    },

    async getbyworkoutid(id) {
        const data = await conn.query("SELECT * FROM Fitness_Workouts WHERE workout_id=?",id);
        if(!data){
            throw Error('The part of the workout was not added.')
        }
        return data[0];
    },

    //add a workout
    async add(input) {
        const data = await conn.query("INSERT INTO Fitness_Workouts (created_at,workout_date,repsDone,setsDone,Fitness_Exercises_exercise_id,Fitness_Persons_person_id) VALUES(?)",
            [[new Date(),new Date(),input.repsDone,input.setsDone,input.Fitness_Exercises_exercise_id,input.Fitness_Persons_person_id]]);
        return await model.getbyworkoutid(data.insertId);
    }
};
module.exports = model; 