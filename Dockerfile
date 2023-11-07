# FROM node:16.13.2-alpine

FROM node:16.13.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev























# WORKDIR /app


# COPY package*.json ./
# COPY . .

# RUN npm install
# RUN npm run build

# COPY . .

# EXPOSE 5000
# # RUN npm run dev

# CMD npm run dev
# # RUN ["chomd","+x","./entrypoint.sh"]
# # ENTRYPOINT [ "sh","./entrypoint.sh" ]
