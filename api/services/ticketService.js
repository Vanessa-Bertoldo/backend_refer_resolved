const database = require("../models")

class TicketService{
    async getAllData(){
        try{
            const tickets = await database.dbo_TICKET.findAll()
            return tickets
        } catch(err) {
            
            throw new Error("Erro ao consultar dados ")
        }
       
    }
}
module.exports = TicketService