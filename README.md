# CRUD de Produtos

Este projeto é uma aplicação **CRUD** completa para gerenciamento de produtos, construída com **React**, **Ant Design** no front-end e **ASP.NET Core** no back-end. Ele utiliza o **Entity Framework Core** para integração com o banco de dados **SQL Server LocalDB**.

---

## Funcionalidades

- **Listagem de Produtos**:
  - Nome, preço de custo, preço de venda e quantidade.
- **Adicionar Produto**:
  - Formulário para inserir novos produtos.
- **Editar Produto**:
  - Atualização de informações de produtos existentes.
- **Excluir Produto**:
  - Remoção de produtos da base de dados.
- **Interface Responsiva**:
  - Desenvolvida com **Ant Design**.

---

## Tecnologias Utilizadas

### Front-End:
- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Axios](https://axios-http.com/)

### Back-End:
- [ASP.NET Core 9.0](https://learn.microsoft.com/aspnet/core)
- [Entity Framework Core](https://learn.microsoft.com/ef)
- [SQL Server LocalDB](https://learn.microsoft.com/sql/sql-server)

---

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/)
- [.NET SDK 9.0](https://dotnet.microsoft.com/)
- [SQL Server LocalDB](https://learn.microsoft.com/sql/sql-server)

---

## Configuração do Ambiente

### Back-End

1. Acesse a pasta do Backend:
   ```bash
   cd ProdutosApi
   ```

2.Restaure as dependências e aplique as migrações:
   ```bash
   dotnet restore
   dotnet ef database update
   ```

3. Configure a string de conexão no arquivo `appsettings.json`, se necessário.

4. Inicie o servidor:
   ```bash
   dotnet run
   ```
   O servidor será iniciado em `http://localhost:5052`.

### Front-End

1. Acesse a pasta do Frontend:
   ```bash
   cd Frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o front-end:
   ```bash
   npm start
   ```
   O front-end estará disponível em `http://localhost:3000`.

---

## Uso

1. Acesse o front-end em `http://localhost:3000`.
2. Utilize a interface para gerenciar os produtos:
   - Adicionar, editar ou excluir produtos.
3. Todas as alterações são refletidas diretamente no banco de dados.

---

## Melhorias Futuras

- Adicionar autenticação de usuario.

---

ganzellalorenzo@gmail.com

---

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT). Você pode usá-lo, modificá-lo e distribuí-lo livremente.
