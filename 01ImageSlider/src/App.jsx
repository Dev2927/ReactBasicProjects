import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const previousButton = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextButton = () => {
    setCurrent(current === images.length - 1 ? current : current + 1);
  };

  return (
    <>
      <div className="main-box">
          {images.map(
            (image, index) =>
              current == index && (
                <div key={image} className="images">
                  <img src={image} alt="Images" />
                </div>
              )
          )}
        <button className="btn" onClick={previousButton}>
          Previous
        </button>
        <button className="btn" onClick={nextButton}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
