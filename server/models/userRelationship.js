const conn = require('./mysql_connection');

const model = {
    //gets all the relationships
    getAll(cb){
        conn.query("SELECT * FROM Fitness_userRelationships", (err,data) => {
            cb(err,data);
        });
    },
    //gets all friends for a user
    get(input,cb){
        conn.query("SELECT * FROM Fitness_userRelationships WHERE (user_id_1=? OR user_id_2=?) AND status='Friends'", [input.user_id_1,input.user_id_2],(err,data) => {
            cb(err,data);
        });
    },
    //gets all pending friend requests for a user (sender/receiver)
    getRequests(input,cb){
        conn.query("SELECT * FROM Fitness_userRelationships WHERE (user_id_1=? OR user_id_2=?) AND status='Pending Friend Request'", [input.user_id_1,input.user_id_2],(err,data) => {
            cb(err,data);
        });
    },
    //Changes the status to friends
    acceptFriend(input,cb){
        conn.query("UPDATE Fitness_userRelationships SET status='Friends' WHERE user_id_1 =? AND user_id_2 =?",[input.user_id_1,input.user_id_2],
        (err,data) => {
            if(err) {
                cb(err);
                return; 
            }
            model.get(data.insertId, (err,data) =>{
                cb(err,data);
            });
        });
    },
    //Changes the status to block 
    declineFriend(input,cb){
        conn.query("UPDATE Fitness_userRelationships SET status = 'Blocked' WHERE user_id_1 =? AND user_id_2 =?",[input.user_id_1,input.user_id_2],
        (err,data) => {
            if(err) {
                cb(err);
                return; 
            }
            model.get(data.insertId, (err,data) =>{
                cb(err,data);
            });
        });
    },
    ///add a friend with a status of pending request the lower id number will always be first to avoid duplicates
    add(input,cb){
        conn.query("INSERT INTO Fitness_userRelationships (created_at,user_id_1,user_id_2,status) VALUES (?)",
            [[new Date(),input.user_id_1,input.user_id_2,"Pending Friend Request"]],
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
}
module.exports = model