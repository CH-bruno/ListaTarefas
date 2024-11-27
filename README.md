# Lista de Tarefas

Este é um projeto de lista de tarefas, onde é possível visualizar, adicionar, editar e remover tarefas. A aplicação utiliza **React** para o front-end e **JSON Server** como servidor de dados mockado.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **JSON Server**: Serve como mock API para armazenar dados de tarefas.
- **Yarn**: Gerenciador de pacotes.

## Funcionalidades

- Exibir uma lista de tarefas.
- Adicionar novas tarefas.
- Editar tarefas existentes.
- Excluir tarefas.
- Armazenamento dos dados em uma API mockada usando **JSON Server**.

## Instalação

### 1. Clone o repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/lista-de-tarefas.git
```
## 2. Instale as dependências

Instale as dependências do projeto usando o Yarn:

```bash
yarn install
```
## 3. Rodar o servidor mock
No terminal, execute o seguinte comando para iniciar o servidor mock com o JSON Server:

```bash
Copiar código
```
Isso irá rodar o servidor no http://localhost:3333, onde os dados de tarefas estarão sendo gerenciados.

## 4. Rodar a aplicação React

Em outro terminal, inicie a aplicação React:

```bash
yarn start
```

Isso abrirá a aplicação no navegador, onde você poderá interagir com a lista de tarefas.

Scripts
yarn start: Inicia a aplicação React.
yarn mock: Inicia o servidor JSON Server para mockar a API.

## 5.Contribuindo

1.Faça um fork deste repositório.
2.Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
3.Faça suas alterações e commit (git commit -am 'Adiciona nova funcionalidade').
4.Envie para o repositório (git push origin feature/nova-funcionalidade).
5.Abra um pull request.