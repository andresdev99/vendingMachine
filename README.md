# Vending Machine Test

Welcome to my Vending Machine Technical Test
This is a Veniding Machine which you can buy any item just adding money on the predefined buttons

## Requirements

Make sure to meet the following requirements before you start working with this project.

### Server Requirements (Laravel)

- **PHP:** This project uses Laravel, which requires PHP. It is recommended to use PHP 8.1 or higher. You can check the installed PHP version with `php --version`.

- **Composer:** Laravel uses Composer to manage dependencies. Make sure you have [Composer](https://getcomposer.org/) installed. You can check if Composer is installed with `composer --version`.

### Client Requirements (React.js with Vite)

- **Node.js:** The client part of this project uses React.js and Vite. Make sure you have [Node.js](https://nodejs.org/) installed. It is recommended to use Node.js v18.18.0 or higher. You can check the installed Node.js version with `node --version`.

- **NPM:** Vite uses npm to manage project dependencies. Ensure you have [npm](https://www.npmjs.com/package/download#download) installed. You can check if npm is installed with `npm --version`.
  
- **Git:** To clone this repository, you need to have Git installed. If you don't have Git installed, you can download and install it from the [official website](https://git-scm.com/).

### Project Setup/Run

Once you have verified the above requirements, follow these steps to set up the project:

- Clone this repository to your system:

   ```sh
   git clone https://github.com/andrespro00/vendingMachine.git
   
## Setup by Docker
- Go to the main folder
  ```sh
    cd vendingMachine
- Install Backend and Frontend:

    ```sh
    docker-compose up --build

## Setup Frontend (**Without Docker**)
   
1. Install client-side (React.js with Vite) dependencies by running:

    ```sh
   npm install

2. Install client-side (React.js with Vite) dependencies by running:

    ```sh
   npm install axios
    
3. Start the Vite development server:

    ```sh
   npm run dev

3. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the frontend.

## Setup Backend (**Without Docker**)
1. Install server-side (Laravel) dependencies by running:

    ```sh
   composer install
2. Start Running the Laravel API:

    ```sh
   php artisan serve


## Core features
- Buttons to add money

![Buttons](https://github.com/andrespro00/vendingMachine/assets/61853982/92f922ff-4183-43ca-aae8-328e4653bc4d)


- Messages when a purchase is done

![Messages](https://github.com/andrespro00/vendingMachine/assets/61853982/7100353b-0592-4802-ab42-db49fb6d67ce)


- Purchase botton and selected item message

![Purchase](https://github.com/andrespro00/vendingMachine/assets/61853982/93ad45fb-5ca8-4ae9-b3a1-b63d585ab465)


 - Change

![Change](https://github.com/andrespro00/vendingMachine/assets/61853982/2054e594-bc31-4f62-8f55-77ea4bcd101c)


- Return Money

![Return](https://github.com/andrespro00/vendingMachine/assets/61853982/6fa3dce5-cff8-4e12-ada8-53536f534cc7)

