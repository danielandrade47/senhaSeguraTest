# Usar uma imagem do Cypress oficial
FROM cypress/base:14.17.0

# Criar o diretório de trabalho
WORKDIR /app

# Copiar o arquivo de configuração do projeto para dentro do container
COPY ./package.json /app/package.json
COPY ./cypress /app/cypress
COPY ./cypress.config.js /app/cypress.config.js

# Instalar as dependências
RUN npm install

# Comando para iniciar os testes
CMD ["npx", "cypress", "run"]