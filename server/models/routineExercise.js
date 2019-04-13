const conn = require('./mysql_connection');

const model = {
    //this gives us all of the connections between exercises and routines
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_RoutineExercises")
    },

    //this gets us the routine with the workouts and the default reps/sets
    async get(input){
        const data = await conn.query("SELECT DISTINCT routineName,exerciseName,defaultReps,defaultSets FROM Fitness_Routines join Fitness_RoutineExercises join Fitness_Exercises where Fitness_Routines_routine_id=?", input.Fitness_Routines_routine_id);
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