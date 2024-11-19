
CREATE DATABASE db_avaliacao_fisica;

USE db_avaliacao_fisica;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100) UNIQUE,
telefone VARCHAR(20),
senha VARCHAR(255),
data_nascimento DATE,
peso DECIMAL(5,2),
altura DECIMAL(3,2),
endereco VARCHAR(255),
data_inscricao DATE,
historico_medico TEXT,
nivel_atividade VARCHAR(50),
objetivos TEXT,
restricoes_alimentares TEXT,
ultima_avaliacao DATE,
ultimo_login DATETIME,
);

DESCRIBE usuarios;

USE db_avaliacao_fisica;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100) UNIQUE,
telefone VARCHAR(20),
senha VARCHAR(255),
data_nascimento DATE,
peso DECIMAL(5,2),
altura DECIMAL(3,2),
endereco VARCHAR(255),
data_inscricao DATE,
historico_medico TEXT,
nivel_atividade VARCHAR(50),
objetivos TEXT,
restricoes_alimentares TEXT,
ultima_avaliacao DATE,
ultimo_login DATETIME,
);

DESCRIBE usuarios;

INSERT INTO usuarios (
nome,
email,
telefone,
senha,
data_nascimento,
peso,
altura,
endereco,
data_inscricao,
nivel_atividade,
objetivos
)
VALUES (
'João da Silva',
'joao@email.com',
'(11) 98765-4321',
'senha123',
'1990-01-01',
75.5,
1.75,
'Rua das Flores, 123',
'2023-11-20',
'Moderado',
'Perder peso e ganhar massa muscular'
);

SELECT * FROM usuarios;


CREATE TABLE avaliacoes (
id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
id_aluno INT,
data_avaliacao DATE,
altura DECIMAL(5,2),
peso DECIMAL(5,2),
imc DECIMAL(5,2),
rcq DECIMAL(5,2),
dobras_cutaneas DECIMAL(5,2),
perimetria DECIMAL(5,2),
laudos TEXT,
fotos TEXT,
questionario_par_q TEXT,
observacoes TEXT,
FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno)
);


DESCRIBE avaliacoes;

INSERT INTO avaliacoes (
id_aluno,
data_avaliacao,
altura,
peso,
imc,
rcq,
dobras_cutaneas,
perimetria,
laudos,
fotos,
questionario_par_q,
observacoes
)
VALUES (
1,  -- Assumindo que o aluno com ID 1 já existe na tabela "alunos"
'2023-11-20',
1.75,
70.5,
22.95,
30,
15,
85,
'Laudo de avaliação física',
'Fotos das medidas antropométricas',
'Questionário PAR-Q preenchido',
'Paciente relata dores no joelho esquerdo'
);

SELECT * FROM avaliacoes;