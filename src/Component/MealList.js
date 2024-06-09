import React from 'react';

const MealList = ({ meals, onAddToCart }) => {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="meal-item">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-details">
            <h4>{meal.strMeal}</h4>
            <p>{meal.strCategory}</p>
            <p className="price">$10.00</p> {/* Assuming a static price for demonstration */}
            <button className="add-to-cart-btn" onClick={() => onAddToCart(meal)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
