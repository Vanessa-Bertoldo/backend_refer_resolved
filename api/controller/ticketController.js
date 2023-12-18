const TicketService = require("../services/ticketService")

const ticketService = new TicketService()

class TicketController{
    static async searchAllData(req, res){
        const fichas = await ticketService.searchDataAll()
        return res.status(200).json(fichas)
    }

    static async searchDataByid(req, res){
        const { id } = req.params
        try{
            const ticket = await ticketService.searchDataById(id)
            res.status(200).json(ticket)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }

    static async insertData(req, res){
        const { matricula, data, modo_pagamento, valor_pago, valor_total, registro, tamanho } = req.body
        try{
            const newFicha = await ticketService.insertData({ matricula, data, modo_pagamento, valor_pago, valor_total, registro, tamanho })
            return res.status(200).json(newFicha)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async deleteData(req, res){
        const { id } = req.params
        try{
            await ticketService.deleteData(id)
            return res.status(200).json({message: "Dados excluidos com sucesso"})
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async getTotTicketDate(req, res){
        const { dataInicial, dataFinal,  modo_pagamento, classe } = req.body
        try{
            const tickets = await ticketService.getTotTicketDate({ dataInicial, dataFinal, modo_pagamento, classe })
            return res.status(200).send({status: 200, data: tickets})
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async sumPayment(req, res){
        const { dataFinal, dataInicial, classe } = req.body
        try{
            const tickets = await ticketService.sumPayment({ dataFinal, dataInicial, classe })
            return res.status(200).send({status: 200, data: tickets})
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }
}
module.exports = TicketController