const TicketService = require("../services/ticketService")

const ticketService = new TicketService()

class TicketController{
    static async getAllTickets(req, res){
        try{
            const tickets = await ticketService.getAllTickets()
            res.status(200).json(tickets)
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }
}
module.exports = TicketController