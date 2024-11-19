const Avaliacao = require('../models/avaliacao');

exports.createAvaliacao = async (req, res) => {
  try {
    const result = await Avaliacao.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.status(200).json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAvaliacaoById = async (req, res) => {
  try {
    console.log('Buscando avaliação com ID:', req.params.id);
    const avaliacao = await Avaliacao.findById(req.params.id);
    if (!avaliacao) {
      return res.status(404).json({ error: 'Avaliação não encontrada' });
    }
    res.status(200).json(avaliacao);
  } catch (error) {
    console.error('Erro ao buscar avaliação:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateAvaliacao = async (req, res) => {
  try {
    const result = await Avaliacao.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAvaliacao = async (req, res) => {
  try {
    const result = await Avaliacao.delete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};