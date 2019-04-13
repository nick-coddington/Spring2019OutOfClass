const conn = require('./mysql_connection');

const model = {
    //get all available routines
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_Routines");
    },
    //get routines by a specific person 
    async get(id){
        const data = await conn.query("SELECT routineName,routineDescription,firstName,lastName FROM Fitness_Routines join Fitness_Persons WHERE Fitness_Persons_person_id=?", id);
        if(!data) {
            throw Error('Routine Not Found')
        }
        return data[0];
    },
    //delete a routine by id (cascades)
    async deleteRoutine(id){
        return await conn.query("DELETE FROM Fitness_Routines WHERE routine_id=?", id);
    },
    //add a new routine
    async add(input){
        const data = await conn.query("INSERT INTO Fitness_Routines (created_at,routineName,routineDescription,Fitness_Persons_person_id) VALUES(?)",
            [[new Date(),input.routineName,input.routineDescription,input.Fitness_Persons_person_id]]);
        return await model.get(data.insertId);
    }
};
module.exports = model; 