FROM node:24
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]
