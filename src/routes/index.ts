import { Router } from "express";
import { procurarUsuario } from "../controller/search";
import { criarUsuario } from "../controller/create_user";

export const router = Router();

router.get('/:cpf', (req, res, next) => {
    procurarUsuario(req, res).catch(next);
});

router.post('/', (req, res, next) => {
    criarUsuario(req, res).catch(next);
});

export default router;
