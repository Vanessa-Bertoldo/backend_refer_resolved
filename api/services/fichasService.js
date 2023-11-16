const database = require("../models")

class FichasService{
    async getDataTableFicha(){
        try{
            const fichas = await database.dbo_FICHA.findAll()
            return fichas
        } catch(err){
            throw new Error("Erro ao buscar dados na tabela fichas", err.message)
        }
        
    }
    /*
    async getFilterDataByName(nome){
        try{
            const fichas = await database.dbo_FICHA.findOne({
                where: {
                    nome: nome
                }
            })
            return fichas
        } catch(e){
            throw new Error("Erro ao executar a busca pela ficha")
        }
    }
    */
    async getFilterDataBymat(matricula){
        try{
            const fichas = await database.dbo_FICHA.findOne({
                where: {
                    matricula: matricula
                }
            })
            return fichas
        } catch(e){
            throw new Error("Erro ao executar a busca pela ficha")
        }
    }

    async insertDataTableFichas(dto){
        try{
            const newFicha = await database.dbo_FICHA.create({
                matricula: dto.matricula,
                nome: dto.nome,
                setor: dto.setor,
                classe: dto.classe,
                tamanho: dto.tamanho
            })
            return newFicha
        } catch(err){
            throw new Error("Erro ao inserir dados na tabela fichas")
        }
    }

    async deleteDataFichasById(matricula){
        try{
            database.dbo_FICHA.destroy({
                where: {
                    matricula: matricula
                }
            })
        } catch(err){
            throw new Error("Erro ao excluir dados da tabela fichas")
        }
    }

    async updateDataFichasById(dto){
        const ficha = await database.dbo_FICHAS.findOne({
            where: {
                matricula: dto.matricula
            }
        })

        if(!ficha){
            throw new Error("Ficha não cadastrada no banco")
        }

        try{
            ficha.nome          = dto.nome
            ficha.setor         = dto.setor
            ficha.classe        = dto.classe
            ficha.tamanho       = dto.tamanho

            await ficha.save()
            return await ficha.reload()
        } catch(err){
            throw new Error("Erro ao atualizar dados")
        }
    }
}
module.exports = FichasService