## API para consulta de CEP e rastreio de encomendas dos Correios

<br>

### Desenvolvido com
- Node.js
- Módulo [Correios-Brasil](https://www.npmjs.com/package/correios-brasil)

<br>

### Como usar

Crie um clone do repositório em sua máquina
````
git clone https://github.com/reecco/correios.git
````

Navegue até a pasta
````
cd correios/
````

Instale as dependências do projeto
````
npm install
````

Execute o projeto com
````
npm start
````

Ou execute com nodemon
````
npm run dev
````

<br>

### Testando a API

É possível testar a API utilizando Insomnia ou Postman

Método suportado
- GET

Exemplos de requisições GET por parâmetro

- Consulta de CEP
  ````
  https://rastreioencomendas.vercel.app/cep/01310200
  ````

- Rastreio de encomenda
  ````
  https://rastreioencomendas.vercel.app/rastreio/OU341933668BR
  ````