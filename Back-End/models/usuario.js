const db = require('../config/db');

class Usuario {
  static async create(data) {
    const [result] = await db.execute(
      'INSERT INTO usuarios (nome, email, telefone, senha, data_nascimento, peso, altura, endereco, data_inscricao, nivel_atividade, objetivos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.nome, data.email, data.telefone, data.senha, data.data_nascimento, data.peso, data.altura, data.endereco, data.data_inscricao, data.nivel_atividade, data.objetivos]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM usuarios');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
    return rows[0];
  }

  static async update(id, data) {
    const [result] = await db.execute(
      'UPDATE usuarios SET nome = ?, email = ?, telefone = ?, senha = ?, data_nascimento = ?, peso = ?, altura = ?, endereco = ?, data_inscricao = ?, nivel_atividade = ?, objetivos = ? WHERE id_usuario = ?',
      [data.nome, data.email, data.telefone, data.senha, data.data_nascimento, data.peso, data.altura, data.endereco, data.data_inscricao, data.nivel_atividade, data.objetivos, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
    return result;
  }
}

module.exports = Usuario;