# Node.js runtime image
FROM node:18-alpine

WORKDIR /app

# package.json
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# port number that application will run on
EXPOSE 8000

# command to run application
CMD ["npm", "start"]