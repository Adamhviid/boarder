FROM php:8.0-fpm
WORKDIR /var/www
RUN apt-get update && apt-get install -y libsqlite3-dev
RUN docker-php-ext-install pdo pdo_sqlite
COPY . /var/www
RUN chown -R www-data:www-data /var/www
CMD ["php-fpm"]
EXPOSE 9000
