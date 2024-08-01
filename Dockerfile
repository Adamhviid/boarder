FROM php:8.0-fpm
WORKDIR /var/www
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo pdo_mysql gd
COPY . /var/www
RUN chown -R www-data:www-data /var/www
CMD ["php-fpm"]
EXPOSE 9000
