import { usuarios } from '../mock/usuarios';

export async function criarUsuario(req: any, res: any) {

    const {
        cpf,
        nome,
        data_nascimento
    } = req.body;

    try { 
        const novoUsuario = {
            cpf,
            nome,
            data_nascimento
        };

        // Adicionando o novo usuário ao array
        usuarios.push(novoUsuario);

        // Enviando a resposta de sucesso
        res.status(201).json({ message: 'Usuario criado', usuario: novoUsuario });

    } catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}
