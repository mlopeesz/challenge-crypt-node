# Challenge Crypt Node 🔒
O Challenge Crypt Node é um desafio onde a aplicação recebe uma string para criptografar e ao consultá-la no banco, retornar descriptografada.

[Deploy](https://challenge-crypt-node.herokuapp.com/encrypts)

## Funcionalidades e Demonstração 👨‍💻
### 1 - Rota GET /encrypts - Retorna todas os textos criptografados do banco.
![get encrypts](https://user-images.githubusercontent.com/87342822/196431676-b0afeffe-a354-4dd1-b902-4493d38f7792.gif)

### 2 - Rota POST /encrypts - Informa um texto para criptografar e retorna o novo registro criptografado.
![post encrypts](https://user-images.githubusercontent.com/87342822/196431953-939ea7ab-82fd-46fb-b2e0-0d9ffde5c726.gif)

### 3 - Rota POST /encrypts (ERROR) - Validação para a existência do campo name.
![post error](https://user-images.githubusercontent.com/87342822/196432120-77e03fcc-e564-48dc-aa9b-c8ee58f4443c.gif)

### 4 - Rota GET /encrypts/:id - Retorna o texto descriptografado pelo id informado.
![get encryptById](https://user-images.githubusercontent.com/87342822/196432295-3b2a5583-01e2-4ad4-8a5d-f7f948e8900a.gif)


## Tecnologias/Dependências Utilizadas 💻
- NodeJS
- express
- PostgreSQL
- dotenv
- crypto
- nodemon

## Abrir e rodar o projeto 🛠
1 - Clone o projeto.   
2 - Execute `npm install` na raíz do projeto.   
3 - Não se esqueça de configurar suas variáveis de ambiente no arquivo `.env.example` e renomeá-lo para `.env`.   
4 - Execute `npm start`. 
