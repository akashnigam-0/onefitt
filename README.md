# React Organic Food Store

Welcome to the React Organic Food Store project! This application is a responsive and professional e-commerce website for purchasing organic food. It showcases various functionalities including category-based product display, search functionality, cart management, and a user login system.

## Features

1. **Navbar**:
   - Responsive navigation bar with links to Home, Groceries, Pages, and Connect with Us.
   - Search functionality to find food items.
   - Cart icon displaying the number of items added.
   - Heart icon for favorites (future enhancement).
   - User icon for login/sign-up.

2. **Banner**:
   - Attractive banner with a discount offer.
   - "Shop Now" button to navigate to the product categories.

3. **Category Selector**:
   - Slider to navigate through different food categories.
   - Displays top categories of organic food.

4. **Meal List**:
   - Displays a list of meals based on the selected category.
   - Shows meal image, name, category, price, and "Add to Cart" button.
   - On adding to the cart, updates the cart icon with the number of items.

5. **Cart Management**:
   - View cart items by clicking on the cart icon.
   - Option to remove items from the cart.
   - Displays total amount and "Place Order" button.
   - Pop-up alert with celebration effect on placing an order.

6. **User Login**:
   - Login modal for user authentication.
   - Functional login/sign-up form.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akashnigam-0/onefitt.git
   
Navigate to the project directory:

sh
Copy code
cd onefitt
Install the dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Usage
Use the navigation bar to explore different sections of the website.
Search for food items using the search bar.
Browse through different categories using the category slider.
Add items to your cart and view them by clicking on the cart icon.
Login or sign up using the user icon.
API
This project uses TheMealDB API for fetching food categories and meals.

Fetch categories:

sh
Copy code
https://www.themealdb.com/api/json/v1/1/categories.php
Fetch meals by category:

sh
Copy code
https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please contact [akashnigam0001@gmail.com].
