FROM node:14-buster-slim
ARG CeiApiUrl__Academica
ARG CeiApiKey__Academica
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
RUN npm run build
EXPOSE 80
CMD npm run start