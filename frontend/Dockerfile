FROM node:12

WORKDIR /app

COPY package*.json ./


RUN ls

COPY . .

ENV PORT=4200

EXPOSE 4200

RUN ls


RUN npm install
RUN npm install -g @angular/cli@9.1.9

CMD ["ng", "serve","--host","0.0.0.0"]
