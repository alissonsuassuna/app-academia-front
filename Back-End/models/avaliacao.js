const db = require('../config/db');

class Avaliacao {
  static async create(data) {
    const [result] = await db.execute(
      'INSERT INTO avaliacoes (id_aluno, data_avaliacao, altura, peso, imc, rcq, dobras_cutaneas, perimetria, laudos, fotos, questionario_par_q, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.id_aluno, data.data_avaliacao, data.altura, data.peso, data.imc, data.rcq, data.dobras_cutaneas, data.perimetria, data.laudos, data.fotos, data.questionario_par_q, data.observacoes]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM avaliacoes');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM avaliacoes WHERE id_avaliacao = ?', [id]);
    return rows[0];
  }

  static async update(id, data) {
    const [result] = await db.execute(
      'UPDATE avaliacoes SET id_aluno = ?, data_avaliacao = ?, altura = ?, peso = ?, imc = ?, rcq = ?, dobras_cutaneas = ?, perimetria = ?, laudos = ?, fotos = ?, questionario_par_q = ?, observacoes = ? WHERE id_avaliacao = ?',
      [data.id_aluno, data.data_avaliacao, data.altura, data.peso, data.imc, data.rcq, data.dobras_cutaneas, data.perimetria, data.laudos, data.fotos, data.questionario_par_q, data.observacoes, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM avaliacoes WHERE id_avaliacao = ?', [id]);
    return result;
  }
}

module.exports = Avaliacao;