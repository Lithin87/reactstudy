FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache git
RUN git clone https://github.com/Lithin87/reactstudy.git /app
RUN npm install
CMD ["npm", "start"]

