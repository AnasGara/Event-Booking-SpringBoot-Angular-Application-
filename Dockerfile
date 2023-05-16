FROM node:16

WORKDIR /app

COPY package.json .


#RUN npm install --legacy-peer-deps

RUN npm install -f

COPY . .

RUN npm run build

EXPOSE 4200

CMD npm run start
