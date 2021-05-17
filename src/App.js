import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./assets/scss/index.scss";
import "./assets/scss/responsive.scss";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Shows from "./components/Shows/Shows";
function App() {
  return (
    <div className="App">
      <Header />
      <Shows />
      <Reviews />
    </div>
  );
}

export default App;
