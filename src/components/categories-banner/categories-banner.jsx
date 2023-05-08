import { useState } from "react";
import "./categories-banner.css";

const CategoriesBanner = ({ categories }) => {
  const categoryTypes = categories;

  if (categoryTypes.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div className="categories-container">
      <h3 className="categories-title">Our Top Products</h3>
      <div className="categories">
        {categoryTypes.map((category, i) => {
          const title = category.title;
          const imageSrc = category.image;
          return (
            <div className="category" key={i}>
              <img src={imageSrc} alt="" className="category-image" />
              <span className="category-item-name">{title}</span>

              <div className="cart-adding-container">
                <button className="cart-adding-button">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesBanner;
