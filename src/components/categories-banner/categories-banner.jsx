import "./categories-banner.css";

import CategoryCard from "../category-card/category-card";

const CategoriesBanner = ({ categories }) => {
  const categoryTypes = categories;

  if (categoryTypes.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div className="categories-container">
      <h3 className="categories-title">Our Top Products</h3>
      <CategoryCard products={categoryTypes} />
    </div>
  );
};
export default CategoriesBanner;
