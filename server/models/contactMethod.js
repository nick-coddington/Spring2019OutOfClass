const conn = require('./mysql_connection');

const model = {
    //get all contacts
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_ContactMethods")
    },
    //get a contact by id 
    async get(id) {
        const data = await conn.query("SELECT * FROM Fitness_ContactMethods WHERE contact_id=?", id);
        if(!data) {
            throw Error('User not found')
        }
        return data[0]
    },
    //delete a contact by id
    async deleteById(id) {
        return await conn.query("DELETE FROM Fitness_ContactMethods WHERE contact_id=?", id);
    },
    //updating the contact handle using the person id and type of value incase there is more then one contact for a user
    async updatehandle(input) {
        await conn.query(
            "UPDATE Fitness_ContactMethods SET contact_value=? WHERE Fitness_Persons_person_id=? AND contact_type=?",[input.contact_value,input.Fitness_Persons_person_id,input.contact_type]
            );
        return await model.get(data.insertId);
    },
    //add a new contact
    async add(input) {
    const data = await conn.query(
        "INSERT INTO Fitness_ContactMethods (created_at,Fitness_Persons_person_id,contact_type,contact_value) VALUES(?)",
        [[new Date(),input.Fitness_Persons_person_id,input.contact_type,input.contact_value]]
        );
        return await model.get(data.insertId);
    }

};
module.exports = model; 