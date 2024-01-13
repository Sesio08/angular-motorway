# Stage 1: Build the Angular app
FROM node:20.11.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

RUN npm run build

FROM nginx:stable

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/index.html /usr/share/nginx/html/index.html

COPY --from=build /app/dist/motorway/browser /usr/share/nginx/html

EXPOSE 80
