FROM nginx:alpine

WORKDIR /app

RUN apk update && apk add bash

COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports for the frontend
EXPOSE 8080
EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]
