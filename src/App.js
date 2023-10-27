import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestPhotos from "./components/LatestPhotos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <LatestPhotos />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
