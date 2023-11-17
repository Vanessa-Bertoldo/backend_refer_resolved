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

    async insertData(dto){
        const today     = new Date(Date.now());
        const register  = today.toISOString(); 
        try{
            const newTicket = await database.dbo_TICKET.create({
                matricula       : dto.matricula,
                nome            : dto.nome,
                setor           : dto.setor,
                classe          : dto.classe,
                desc            : dto.desc,
                pagamento       : dto.pagamento,
                valor           : dto.valor,
                registro        : register

            })

            return newTicket
        } catch(err) {
            console.log("erro: ", err)
            throw new Error("Erro ao registrar dados")
        }
    }

    async getTicketByMat(matricula){
        try{
            const ticket = await database.dbo_TICKET.findOne({
                where: {
                    matricula: matricula
                }
            })
            return ticket
        } catch(err) {
            throw new Error("Erro ao buscar dados")
        }
    }

    async deleteTicketByMat(matricula){
        try{
            await database.dbo_TICKET.destroy({
                where: {
                    matricula: matricula
                }
            })
        } catch(err) {
            throw new Error("Erro ao excluir dados")
        }
    }

    async updateDataTicket(dto){
       
        const ticket = await database.dbo_TICKET.findOne({
            where: {
                matricula: dto.matricula
            }
        })
        if(!ticket){
            throw new Error("Ticket não registrado")
        }
        try{
            ticket.nome             = dto.nome
            ticket.setor            = dto.setor
            ticket.data             = dto.data
            ticket.desc             = dto.desc
            ticket.pagamento        = dto.pagamento
            ticket.valor            = dto.valor

            await ticket.save()
            return await ticket.reload()
        } catch(err) {
            throw new Error("Erro ao atualizar dados")
        }
    }
}
module.exports = TicketService