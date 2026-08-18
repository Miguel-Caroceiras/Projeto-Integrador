# Teste rápido, revisar depois

FROM node:24.14.1

WORKDIR /Projeto-Integrador

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run dev"]