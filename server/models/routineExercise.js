const conn = require('./mysql_connection');

const model = {
    //this gives us all of the connections between exercises and routines
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_RoutineExercises")
    },

    //this gets us the routine with the workouts and the default reps/sets
    async get(input){
        const data = await conn.query("SELECT routineName,exerciseName,defaultSets,defaultReps FROM Fitness_Routines JOIN Fitness_RoutineExercises ON Fitness_Routines.routine_id = Fitness_RoutineExercises.Fitness_Routines_routine_id JOIN Fitness_Exercises ON Fitness_RoutineExercises.Fitness_Exercises_exercise_id = Fitness_Exercises.exercise_id WHERE routine_id=?", input.routine_id);
        if(!data){
            throw Error('Routine not found')
        }
        return data;
    },
    
    //delete part of a routine
    async deleteById(id) {
        return await conn.query("DELETE FROM Fitness_RoutineExercises WHERE routineExercises_id=?", id);
    },
    
    //to allow the add to display a result
    async getById(id) {
        const data = await conn.query("SELECT * FROM Fitness_RoutineExercises WHERE routineExercises_id=?", id);
        if(!data) {
            throw Error('There are no responses')
        }
        return data[0]
    },
    
    //add a connection between a specific routine and a specific exercise
    async add(input){
        const data = await conn.query("INSERT INTO Fitness_RoutineExercises (created_at,Fitness_Routines_routine_id,Fitness_Exercises_exercise_id) VALUES(?)",
            [[new Date(),input.Fitness_Routines_routine_id,input.Fitness_Exercises_exercise_id]]);
        return await model.getById(data.insertId);
    }
};
module.exports = model; 