FROM node:16.13.2-alpine

WORKDIR /app







# PHERO

# COPY package*.json ./
# COPY . .

RUN npm install
RUN npm run build

COPY . .

EXPOSE 5000
# RUN npm run dev

CMD npm run dev
# RUN ["chomd","+x","./entrypoint.sh"]
# ENTRYPOINT [ "sh","./entrypoint.sh" ]