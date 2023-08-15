# # Stage 1: Build the server
# FROM node:16-alpine as builder

# WORKDIR /app

# COPY . .


# RUN npm install -g nx && nx --version
# RUN npm ci

# RUN npx nx run server:build

# # Stage 2: Create the final image
# FROM node:16-alpine

# WORKDIR /app

# COPY --from=builder /app/node_modules  /app/node_modules
# COPY --from=builder /app/dist/apps/server /app
# COPY .env /app/

# EXPOSE 3000

# CMD [ "node", "main.js" ]
