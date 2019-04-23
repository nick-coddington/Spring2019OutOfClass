const conn = require('./mysql_connection');

const model = {
    //gets all the relationships
    async getAll(){
        return await conn.query("SELECT * FROM Fitness_userRelationships");
    },
    
    //gets all friends for a user
    async getfriends1(input){
        const data = await conn.query("SELECT user_id_1,user_id_2, firstName,lastName FROM Fitness_userRelationships INNER JOIN Fitness_Persons ON Fitness_userRelationships.user_id_1 = Fitness_Persons.person_id WHERE (user_id_1=? OR user_id_2=?) AND status='Friends'", [input.user_id_1,input.user_id_2]);
        if(!data) {
            throw Error('There is no friends to be displayed')
        }
        return data;
    },
    async getfriends2(input){
        const data = await conn.query("SELECT user_id_1,user_id_2, firstName,lastName FROM Fitness_userRelationships INNER JOIN Fitness_Persons ON Fitness_userRelationships.user_id_2 = Fitness_Persons.person_id WHERE (user_id_1=? OR user_id_2=?) AND status='Friends'", [input.user_id_1,input.user_id_2]);
        if(!data) {
            throw Error('There is no friends to be displayed')
        }
        return data;
    },

    //gets all pending friend requests for a user (sender/receiver)
    async getrequests1(input){
        const data = await conn.query("SELECT user_id_1, user_id_2, firstName, lastName FROM Fitness_userRelationships INNER JOIN Fitness_Persons ON Fitness_userRelationships.user_id_1 = Fitness_Persons.person_id WHERE (user_id_1=? OR user_id_2=?) AND status='Pending Friend Request'", [input.user_id_1,input.user_id_2]);
        if(!data) {
            throw Error('There are 0 pending requests.')
        }
        return data;
    },
    async getrequests2(input){
        const data = await conn.query("SELECT user_id_1, user_id_2, firstName, lastName FROM Fitness_userRelationships INNER JOIN Fitness_Persons ON Fitness_userRelationships.user_id_2 = Fitness_Persons.person_id WHERE (user_id_1=? OR user_id_2=?) AND status='Pending Friend Request'", [input.user_id_1,input.user_id_2]);
        if(!data) {
            throw Error('There are 0 pending requests.')
        }
        return data;
    },


    //Changes the status to friends
    async acceptFriend(input){
        const data = await conn.query("UPDATE Fitness_userRelationships SET status='Friends' WHERE user_id_1 =? AND user_id_2 =?",[input.user_id_1,input.user_id_2]);
            if(!data) {
                throw Error('Not able to accept friend request')
            } else {
                return {status:"Success", msg: "You are now friends!"}
            }
    },

    //Changes the status to block 
    async declineFriend(input){
        const data = await conn.query("UPDATE Fitness_userRelationships SET status = 'Blocked' WHERE user_id_1 =? AND user_id_2 =?",[input.user_id_1,input.user_id_2])
         if(!data){
             throw Error('Not able to delete request at this time.')
         } else {
             return {status: "Blocked", msg: "You have blocked this request."}
         }
    },

    ///add a friend with a status of pending request the lower id number will always be first to avoid duplicates
    async add(input){
        const x = await conn.query("SELECT * FROM Fitness_userRelationships WHERE user_id_1=? AND user_id_2=?", [input.user_id_1, input.user_id_2]);
        if(!x) {        
            const data = await conn.query("INSERT INTO Fitness_userRelationships (created_at,user_id_1,user_id_2,status) VALUES (?)",
            [[new Date(),input.user_id_1,input.user_id_2,"Pending Friend Request"]]);
            return data;
        } else {
            throw Error("There is already a request pending")
        }
    }
}
module.exports = model