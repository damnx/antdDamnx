FROM nginx:latest

COPY ./build /var/www/html
COPY ./nginx /etc/nginx/conf.d

EXPOSE 80