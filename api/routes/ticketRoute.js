const { Router }        =   require("express")
const TicketController = require("../controller/ticketController")

const router = Router()

router
    .get('/tickets', TicketController.getAllTickets)
    .get('/ticket/matricula/:matricula', TicketController.getTicket)
    .post('/ticket', TicketController.insertDataTicket)
    .put('/ticket/matricula/:matricula', TicketController.updateData)
    .delete('/ticket/matricula/:matricula', TicketController.deleteTicket)
    
module.exports = router