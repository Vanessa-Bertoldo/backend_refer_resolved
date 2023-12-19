const { Router }        =   require("express")
const TicketController  = require("../controller/ticketController")

const router = Router()

router
    .get('/tickets', TicketController.searchAllData)
    .get('/ticket/id/:id', TicketController.searchDataByid)
    .post('/ticket', TicketController.insertData)
    .delete('/ticket/id/:id', TicketController.deleteData)
    .post('/filterDataByDate', TicketController.getTotTicketDate)
    .post('/filterPayment', TicketController.sumPayment)
    .post('/groupTicket', TicketController.grupTicket)

module.exports = router    