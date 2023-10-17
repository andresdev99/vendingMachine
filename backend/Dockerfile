FROM php:8.1-apache

RUN apt update \
    && apt install -y \
    g++ \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    zip \
    zlib1g-dev \
    && docker-php-ext-install \
    intl \
    opcache \
    pdo \
    pdo_pgsql \
    pgsql

# RUN docker-php-ext-install pdo mbstring
WORKDIR /usr/src/backend

COPY . .

# RUN composer install

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

CMD ["php","artisan","serve","--host=0.0.0.0", "--port=8000"]
