const { Router }        =   require("express")
const TicketController = require("../controller/ticketController")

const router = Router()

router
    .get('/tickets', TicketController.getAllTickets)
    .get('/ticket/id/:id')
    .post('/ticket')
    .put('/ticket/id/:id')
    .delete('/ticket/id/:id')
    
module.exports = router