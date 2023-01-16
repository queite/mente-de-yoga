FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
EXPOSE 80
CMD [ "npm", "start" ]