#Stage 1 build.
#could be more efficient
FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm install -g nx && nx --version
RUN npm ci

RUN npx nx run client:build



#Stage 2 after build
FROM nginx:alpine

RUN rm /usr/share/nginx/html/index.html

COPY --from=builder /app/dist/apps/client /usr/share/nginx/html

# Expose ports for the frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
