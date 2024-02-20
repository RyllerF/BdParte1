import { usuarios } from '../mock/usuarios';

export async function procurarUsuario(req: any, res: any) {

    const {
        cpf
    } = req.params;

    try {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.cpf === cpf);
        console.log(usuarioEncontrado)
        if (usuarioEncontrado) {
            return res.status(200).json({ message: 'Usuario encontrado' });
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    
    } catch(error) {
        return res.status(500).json({ error: error.toString() });
    }
}
