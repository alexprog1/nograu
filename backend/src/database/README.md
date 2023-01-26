## Tubarão Perguntas

## Requisitos

[USUARIO]

- [ ] Deve ser possível cadastrar usuarios
- [ ] Deve ser possível buscar todos os usuarios
- [ ] Deve ser possível deletar um usuario

[CLIENTE]

- [ ] Deve ser possível cadastrar clientes
- [ ] Deve ser possível buscar todos os clientes
- [ ] Deve ser possível deletar um cliente

[SERVIÇOS]

- [ ] Deve ser possível cadastrar serviços
- [ ] Deve ser possível buscar todos os serviços
- [ ] Deve ser possível deletar um serviço

[AGENDAMENTO]

- [ ] Deve ser possível cadastrar agendamentos
- [ ] Deve ser possível buscar todos os agendamentos
- [ ] Deve ser possível deletar um agendamento

## Tabelas

[agendamento]
id: INT[11]
data: DATE[8]
hora_chegada: TIME[4]
clientes[nome]
clientes[endereco]
clientes[bairro]
clientes[telefone]
veiculo[descricao]
veiculo[placa]
veiculo[cor]
km: INT[11]
+servicos: VARCHAR[255]
hora_chegada: TIME[4]
status: VARCHAR[255]

---

[clientes]
id: INT[11]
data_registro: DATE[8]
cpf_cnpj: INT[14]
nome: VARCHAR[255]
endereco: TEXT[255]
bairro: TEXT[255]
telefone: INT[255]
cor: VARCHAR[255]

---

[servicos]
id: INT[11]
descricao: VARCHAR[255]
valor: DOUBLE[255]

---

[usuarios]
id: INT[11]
email: VARCHAR[255]
senha: VARCHAR[255]
