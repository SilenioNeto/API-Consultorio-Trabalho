import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())
const prisma = new PrismaClient()
const porta = 3000
// *********************** EMPRESA *********************** //

// Rota GET para /empresa

server.get('/empresa', async (req, res) => {
    try {
        const empresas = await prisma.empresa.findMany()
        res.status(200).json(empresas)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar empresas" })
    }
});

// Rota POST para /empresa

server.post('/empresa', async (req, res) => {
    try {
        const novaEmpresa = await prisma.empresa.create({
            data: {
                nome_fantasia: req.body.nome_fantasia,
                cnpj: req.body.cnpj,
                razao_social: req.body.razao_social,
                funcionario: req.body.funcionario,
            }
        });
        res.status(201).json(novaEmpresa)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /empresa

server.put('/empresa/:id', async (req, res) => {
    try {
        const editEmpresa = await prisma.empresa.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome_fantasia: req.body.nome_fantasia,
                cnpj: req.body.cnpj,
                razao_social: req.body.razao_social,
                funcionario: req.body.funcionario
            }
        })
        res.status(202).json(editEmpresa)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /empresa

server.delete('/empresa/:id', async (req, res) => {
    try {
        const deleteEmpresa = await prisma.empresa.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Empresa deletada" })
    } catch (error) {
        res.status(500).json(error)
    }
})

// *********************** FUNCIONARIO *********************** //

// Rota GET para /funcionario

server.get('/funcionario', async (req, res) => {
    try {
        const funcionario = await prisma.funcionario.findMany()
        res.status(200).json(funcionario)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar funcionario" })
    }
});

// Rota POST para /funcionario

server.post('/funcionario', async (req, res) => {
    try {
        const novoFuncionario = await prisma.funcionario.create({
            data: {
                nome: req.body.nome,
                cpf: req.body.cpf,
                telefone: req.body.telefone,
                ocupacao: req.body.ocupacao,
                id_empresa: req.body.idempresa
            }
        });
        res.status(201).json(novoFuncionario)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /funcionario

server.put('/funcionario/:id', async (req, res) => {
    try {
        const editFuncionario = await prisma.funcionario.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    telefone: req.body.telefone,
                    ocupacao: req.body.ocupacao,
                    id_empresa: req.body.idempresa
            }
        })
        res.status(202).json(editFuncionario)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /funcionario

server.delete('/funcionario/:id', async (req, res) => {
    try {
        const deleteFuncionario = await prisma.funcionario.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Funcionario deletado" })
    } catch (error) {
        res.status(500).json(error)
    }
})

// *********************** MEDICO *********************** //

// Rota GET para /medico

server.get('/medico', async (req, res) => {
    try {
        const medico = await prisma.medico.findMany()
        res.status(200).json(medico)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar medico" })
    }
});

// Rota POST para /medico

server.post('/medico', async (req, res) => {
    try {
        const novoMedico = await prisma.medico.create({
            data: {
                nome:req.body.nome,
                crm:req.body.crm,
                especialidade:req.body.especialidade
            }
        });
        res.status(201).json(novoMedico)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /medico

server.put('/medico/:id', async (req, res) => {
    try {
        const editMedico = await prisma.medico.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome:req.body.nome,
                crm:req.body.crm,
                especialidade:req.body.especialidade
            }
        })
        res.status(202).json(editMedico)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /medico

server.delete('/medico/:id', async (req, res) => {
    try {
        const deleteMedico = await prisma.medico.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Medico deletado" })
    } catch (error) {
        res.status(500).json(error)
    }
})

// *********************** EXAME *********************** //

// Rota GET para /exame

server.get('/exame', async (req, res) => {
    try {
        const exame = await prisma.exame.findMany()
        res.status(200).json(exame)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar exame" })
    }
});

// Rota POST para /exame

server.post('/exame', async (req, res) => {
    try {
        const novoExame = await prisma.exame.create({
            data: {
                tipo_exame:req.body.tipo_exame,
                valor_exame:req.body.valor_exame
            }
        });
        res.status(201).json(novoExame)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /exame

server.put('/exame/:id', async (req, res) => {
    try {
        const editExame = await prisma.exame.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                tipo_exame:req.body.tipo_exame,
                valor_exame:req.body.valor_exame
            }
        })
        res.status(202).json(editExame)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /exame

server.delete('/exame/:id', async (req, res) => {
    try {
        const deleteExame = await prisma.exame.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Exame deletado" })
    } catch (error) {
        res.status(500).json(error)
    }
})

// *********************** CONSULTA *********************** //

// Rota GET para /consulta

server.get('/consulta', async (req, res) => {
    try {
        const consulta = await prisma.consulta.findMany()
        res.status(200).json(consulta)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar consulta" })
    }
});

// Rota POST para /consulta

server.post('/consulta', async (req, res) => {
    try {
        const novaConsulta = await prisma.consulta.create({
            data: {
                id_funcionario:req.body.idfuncionario,
                id_medico:req.body.idmedico,
                data_consulta:req.body.dataconsulta,
                id_exame:req.body.idexame
            }
        });
        res.status(201).json(novaConsulta)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /consulta

server.put('/consulta/:id', async (req, res) => {
    try {
        const editConsulta = await prisma.consulta.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                id_funcionario:req.body.idfuncionario,
                id_medico:req.body.idmedico,
                data_consulta:req.body.dataconsulta,
                id_exame:req.body.idexame
            }
        })
        res.status(202).json(editConsulta)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /consulta

server.delete('/consulta/:id', async (req, res) => {
    try {
        const deletarConsulta = await prisma.consulta.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Consulta deletada" })
    } catch (error) {
        res.status(500).json(error)
    }
})

// *********************** EMISSAO DE ATESTADO *********************** //

// Rota GET para /emissao_atestado

server.get('/emissao_atestado', async (req, res) => {
    try {
        const emissao_atestado = await prisma.emissao_atestado.findMany()
        res.status(200).json(emissao_atestado)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar emissao_atestado" })
    }
});

// Rota POST para /emissao_atestado

server.post('/emissao_atestado', async (req, res) => {
    try {
        const novaEmissao_atestado = await prisma.emissao_atestado.create({
            data: {
                id_consulta:req.body.id_consulta,
                descricao:req.body.descricao
            }
        });
        res.status(201).json(novaEmissao_atestado)
    } catch (error) {
        res.status(500).json(error)
    }
});

// Rota PUT para /emissao_atestado

server.put('/emissao_atestado/:id', async (req, res) => {
    try {
        const editEmissao_atestado = await prisma.emissao_atestado.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                id_consulta:req.body.id_consulta,
                descricao:req.body.descricao
            }
        })
        res.status(202).json(editEmissao_atestado)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Rota DELETE para /emissao_atestado

server.delete('/emissao_atestado/:id', async (req, res) => {
    try {
        const deletarEmissao_atestado = await prisma.emissao_atestado.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(202).json({ "message": "Atestado deletado" })
    } catch (error) {
        res.status(500).json(error)
    }
})


// INICIANDO SERVIDOR

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});