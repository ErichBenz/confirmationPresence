import Guest from "../models/Guest.js";
import * as Yup from "yup";

export async function createGuestDb(req, res) {
  const schema = Yup.object({
    name: Yup.string().required("Nome obrigatório"),
    number: Yup.string().required(),
    status: Yup.string().oneOf(["confirmed", "declined"]).required(),
    companions: Yup.number().required("Digite o número de pessoas"),
  });

  const isValidate = await schema.isValid(req.body);

  if (!isValidate) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  const guestExists = await Guest.findOne({
    number: req.body.number,
  });

  if (guestExists) {
    return res
      .status(400)
      .json({ message: "Número ja cadastrado no Banco de Dados" });
  }

  const createGuest = await Guest.create(req.body);

  return res.status(201).json({
    message: "Resposta registrada com sucesso!",
    guest: createGuest,
  });
}

export async function getGuestDb(_req, res) {
    const users = await Guest.find();

    return res.status(200).json(users)    
}


