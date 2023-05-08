import "./categories.css";

const CategoriesBar = ({ categories }) => {
  const categoryNames = categories;

  return (
    <div className="category-names-container">
      {categoryNames.map((categoryName, i) => {
        return (
          <span className="category-name" key={i}>
            {categoryName}
          </span>
        );
      })}
    </div>
  );
};
export default CategoriesBar;
