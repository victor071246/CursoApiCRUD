//metodos: index, show, update, store, destroy
/*
index: listagem de sessões
store: criar uma sessão
show: quando queremos listar uma única sessão
update: quando queremos alterar alguma sessão
destroy: quando queremos deletar uma sessão
 */

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    //Verificando se esse usuário já existe
    let user = await User.findOne({
      email,
    });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
