import React from 'react';

const Cart = ({ cartItems, onRemoveItem, totalAmount, onClose, onPlaceOrder }) => {
  return (
    <div className="cart bg-white shadow-lg p-4 fixed top-0 right-0 w-1/3 h-full z-50">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.idMeal} className="flex justify-between items-center mb-4">
              <img src={item.strMealThumb} alt={item.strMeal} className="w-16 h-16 object-cover" />
              <div className="ml-4 flex-1">
                <h4 className="font-bold">{item.strMeal}</h4>
                <p>{item.strCategory}</p>
                <p className="price">$10.00</p>
              </div>
              <button className="text-red-500" onClick={() => onRemoveItem(item.idMeal)}>
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
          </div>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full"
            onClick={onPlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
      <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full" onClick={onClose}>
        Close Cart
      </button>
    </div>
  );
};

export default Cart;
