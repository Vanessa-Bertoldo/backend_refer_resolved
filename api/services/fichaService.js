const database = require("../models")

class FichaService{
    async searchAllData(){
        const fichas = database.TB_FICHA.findAll()
        return fichas
    }

    async insertData(dto){
        const ficha = await database.TB_FICHA.findOne({
            where: {
                matricula: dto.matricula
            }
        })

        if(ficha){
            throw new Error("Ficha já cadastrada no banco")
        }

        try{
            const newFicha = database.TB_FICHA.create({
                id:                 dto.matricula,
                matricula:          dto.matricula,
                nome:               dto.nome,
                setor:              dto.setor,
                classe:             dto.classe,
                tamanho:            dto.tamanho
            })
            const fichas = await this.searchAllData()
            return fichas
        } catch(err){
            throw new Error("Erro ao inserir dados no banco")
        }
    }

    async searchDataFilter(id){
       try{
            const ficha = await database.TB_FICHA.findOne({
                where: {
                    id: id
                }
            })
            return ficha
       } catch(err){
            throw new Error("erro ao buscar ficha")
       }
    }
    
    async deleteData(id){
        try{
            await database.TB_FICHA.destroy({
                where:{
                    id: id
                }
            })
        } catch(err){
            throw new Error("Erro ao excluir dados")
        }
    }

    async searchByName(name){
        try{
            const fichas = await database.TB_FICHA.findAll({
                where: {
                    nome: {
                        [database.Sequelize.Op.like]: `%${name}%`
                    }
                }
            })
            return fichas
        } catch(err){
            throw new Error("Erro ao pesquisar ficha")
        }
    }
}

module.exports = FichaService
