const conn = require('./mysql_connection');

const model = {
    //get all available routines
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_Routines");
    },
    //get routines by a specific person 
    async get(input){
        const data = await conn.query("SELECT * FROM Fitness_Routines WHERE Fitness_Persons_person_id=?", input.Fitness_Persons_person_id);
        if(!data) {
            throw Error('Routine Not Found')
        }
        return data;
    },
    async routineId(input){
        const data = await conn.query("SELECT * FROM Fitness_Routines WHERE routine_id=?", input.routine_id);
        return data;
    },
    //delete a routine by id (cascades)
    async deleteRoutine(id){
        return await conn.query("DELETE FROM Fitness_Routines WHERE routine_id=?", id);
    },
    async getInfo(id) {
        const data = await conn.query("SELECT * FROM Fitness_Routines WHERE routine_id=?",id);
        return data[0];
    },
    //add a new routine
    async add(input){
        const data = await conn.query("INSERT INTO Fitness_Routines (created_at,routineName,routineDescription,Fitness_Persons_person_id) VALUES(?)",
            [[new Date(),input.routineName,input.routineDescription,input.Fitness_Persons_person_id]]);
        return await model.getInfo(data.insertId);
    }
};
module.exports = model; 