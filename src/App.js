import "./App.css";
import Navbar from "./components/navbar/navbar";
import CategoriesBanner from "./components/categories-banner/categories-banner";
import useFetcher from "./fetcher";
import { requests } from "./requests";
import InformationTab from "./components/information/information.jsx";
import Footer from "./components/footer/footer";
import CategoriesBar from "./components/categoriesbar/categoriesbar";

function App() {
  const [topProducts] = useFetcher(requests.topProducts);
  const [categories] = useFetcher(requests.categories);

  console.log(categories);

  return (
    <div className="App">
      <Navbar />
      <CategoriesBar categories={categories} />
      <CategoriesBanner categories={topProducts} />
      <InformationTab />
      <Footer />
    </div>
  );
}

export default App;
