"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Banner from '@/Component/Banner';
import CategorySelector from '@/Component/CategorySelector';
import MealList from '@/Component/MealList';
import Footer from './Footer';
import Cart from './cart';
import { fetchCategories, fetchMealsByCategory } from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData.map(category => category.strCategory));
      setSelectedCategory(categoriesData[0].strCategory);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getMeals = async () => {
      if (selectedCategory) {
        const mealsData = await fetchMealsByCategory(selectedCategory);
        setMeals(mealsData);
      }
    };
    getMeals();
  }, [selectedCategory]);

  const handleAddToCart = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
  };

  const handleRemoveFromCart = (mealId) => {
    setCart((prevCart) => prevCart.filter(meal => meal.idMeal !== mealId));
  };

  const getTotalAmount = () => {
    return cart.length * 10; // Assuming each meal costs $10
  };

  const handlePlaceOrder = () => {
    // Logic for placing the order (e.g., sending order data to the server)
    toast.success('Congratulations! Your order is placed successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setCart([]);
    setIsCartVisible(false);
  };

  return (
    <div className="app bg-gray-100 min-h-screen">
      <div className="navbar-banner-container">
        <Navbar cartItemCount={cart.length} onCartClick={() => setIsCartVisible(!isCartVisible)} />
        <Banner />
      </div>
      <div className="container mx-auto px-4">
        <CategorySelector categories={categories} onSelectCategory={setSelectedCategory} />
        <MealList meals={meals} onAddToCart={handleAddToCart} />
      </div>
      {isCartVisible && (
        <Cart
          cartItems={cart}
          onRemoveItem={handleRemoveFromCart}
          totalAmount={getTotalAmount()}
          onClose={() => setIsCartVisible(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
