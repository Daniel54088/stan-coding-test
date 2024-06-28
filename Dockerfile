
# Stage 1: Build the React app
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la /app/dist

FROM nginx:1.23-alpine
WORKDIR /user/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]