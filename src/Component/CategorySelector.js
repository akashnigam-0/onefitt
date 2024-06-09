import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategorySelector = ({ categories, onSelectCategory }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleCategoryChange = (index) => {
    setCurrentCategoryIndex(index);
    onSelectCategory(categories[index]);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="category-selector">
      <h2>Shop by Category</h2>
      <h3>Top Category of Organic Food</h3>
      <div className="slider-container">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={category} className="px-2">
              <button
                className={`px-2 py-1 text-sm rounded-full focus:outline-none w-full ${
                  index === currentCategoryIndex ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleCategoryChange(index)}
              >
                {category}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySelector;
