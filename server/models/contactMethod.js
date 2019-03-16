const conn = require('./mysql_connection');

const model = {
    //get all contacts
    getAll(cb){
        conn.query("SELECT * FROM Fitness_ContactMethods", (err,data) => {
            cb(err,data);
        });
    },
    //get a contact by id 
    get(id,cb){
        conn.query("SELECT * FROM Fitness_ContactMethods WHERE contact_id=?", id, (err,data) => {
            cb(err,data[0]);
        });
    },
    //delete a contact by id
    deleteById(id,cb){
        conn.query("DELETE FROM Fitness_ContactMethods WHERE contact_id=?", id, (err,data) => {
            cb(err,data);
        });
    },
    //updating the contact handle using the person id and type of value incase there is more then one contact for a user
    updatehandle(input,cb){
        conn.query("UPDATE Fitness_ContactMethods SET contact_value=? WHERE Fitness_Persons_person_id=? AND contact_type=?", 
        [input.contact_value,input.Fitness_Persons_person_id,input.contact_type],
        (err,data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err,data) => {
                cb(err,data);
            });
        });
    },
    //add a new contact
    add(input,cb){
        conn.query("INSERT INTO Fitness_ContactMethods (created_at,Fitness_Persons_person_id,contact_type,contact_value) VALUES(?)",
            [[new Date(),input.Fitness_Persons_person_id,input.contact_type,input.contact_value]],
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