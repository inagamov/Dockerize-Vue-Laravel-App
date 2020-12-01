FROM php:fpm-alpine

RUN apk add --no-cache $PHPIZE_DEPS oniguruma-dev libzip-dev curl-dev \
    && docker-php-ext-install pdo_mysql mbstring zip curl \
    && pecl install xdebug redis \
    && docker-php-ext-enable xdebug redis
RUN mkdir /app
VOLUME /app
WORKDIR /app

EXPOSE 8080
CMD php artisan serve --host=0.0.0.0 --port=8080