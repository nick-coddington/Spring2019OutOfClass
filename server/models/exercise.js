const conn = require('./mysql_connection');

const model = {
    
    //listing all the exercises
    async getAll() {
        return await conn.query("SELECT * FROM Fitness_Exercises")
    },

    //get information for a single exercise
    async get(id){
        const data = await conn.query("SELECT * FROM Fitness_Exercises WHERE exercise_id=?", id);
        if(!data) {
            throw Error('Exercise not found.')
        }
        return data[0];
    },

    //delete an exercise
    async deleteExercise(id) {
        return await conn.query("DELETE FROM Fitness_Exercises WHERE exercise_id=?", id);
    },

    //change the default reps by exercise name
    async changeReps(input){
        const data = await conn.query("UPDATE Fitness_Exercises SET defaultReps=? WHERE exerciseName=?", [input.defaultReps, input.exerciseName]
        );
        return await model.get(data.insertId);
    },

    //change the default sets by exercise name
    async changeSets(input){
        const data = await conn.query("UPDATE Fitness_Exercises SET defaultSets=? WHERE exerciseName=?", [input.defaultSets, input.exerciseName]
        );
        return await model.get(data.insertId);
    },

    //adding an exercise to the database
    async add(input) {
        const data = await conn.query("INSERT INTO Fitness_Exercises (created_at,exerciseName,defaultReps,defaultSets,exerciseDescription) VALUES(?)",
            [[new Date(),input.exerciseName,input.defaultReps,input.defaultSets,input.exerciseDescription]]
            );
        return await model.get(data.insertId);
    }

};
module.exports = model; 