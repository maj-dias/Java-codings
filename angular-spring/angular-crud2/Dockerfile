FROM node:18
WORKDIR /app-angular
ARG PORT=4200
ENV PORT=$PORT
EXPOSE $PORT
COPY . .
RUN npm install
ENTRYPOINT npm run start