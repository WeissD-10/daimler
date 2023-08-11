# Stage 1: Build the server and frontend
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install -g nx && nx --version

RUN npm install

# Build the server
WORKDIR /app/apps/server
RUN npx nx run server:build

# Build the frontend
WORKDIR /app/apps/client
RUN npx nx run client:build

# Stage 2: Create the final image
FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist

# Expose ports for the frontend
EXPOSE 4200
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
