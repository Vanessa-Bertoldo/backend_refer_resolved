const TicketService = require("../services/ticketService")

const ticketService = new TicketService()

class TicketController{
    static async getAllTickets(req, res){
        try{
            const tickets = await ticketService.getAllData()
            res.status(200).json(tickets)
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }

    static async insertDataTicket(req, res){
        const { matricula, nome, setor, classe, desc, pagamento, valor } = req.body
        try{
            const newTicket = await ticketService.insertData({ matricula, nome, setor, classe, desc, pagamento, valor })
            res.status(200).json(newTicket)
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }

    static async getTicket(req, res){
        const { matricula } = req.params
        try{
            const ticket = await ticketService.getTicketByMat(matricula)
            res.status(200).json(ticket)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }

    static async deleteTicket(req, res){
        const { matricula } = req.params
        try{
            await ticketService.deleteTicketByMat(matricula)
            res.status(200).json({message: "Dados excluidos com sucesso"})
        } catch(err) {  
            res.status(400).send({message: err.message})
        }
    }

    static async updateData(req, res){
        const { matricula } = req.params
        const {nome, setor, data, desc, pagamento, valor } = req.body
        try{
            const ticket = await ticketService.updateDataTicket({matricula, nome, setor, data, desc, pagamento, valor })
            res.status(200).json(ticket)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }
}
module.exports = TicketController