# Imagem baseada no node
FROM node:14-alpine AS build 

# Define onde estou rodando minha aplicação; Existe dentro do container
WORKDIR /app

# Copia arquivos para dentro do container
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html

# Define a porta que será utilizada
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
