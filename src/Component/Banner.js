import React from 'react';

const Banner = () => {
  return (
    <div className="bg-green-900 text-white py-20 px-10 ">
      <div className="text-center">
        <p className="text-2xl mb-2">Discount up to 20%</p>
        <p className="text-xl font-semibold mb-6">BUY FRESH AND ORGANIC GROCERY FOOD</p>
        <p className=" mb-6">Eat Safe Be Safe</p>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
