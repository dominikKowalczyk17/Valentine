import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isValentine, setIsValentine] = useState(false);
  const [isRaining, setIsRaining] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleYesClick = () => {
    setIsValentine(true);
    setIsRaining(false); // Zatrzymaj deszcz po kliknięciu "TAK"
    setIsImageVisible(false); // Ukryj zdjęcie po kliknięciu "TAK"
  };

  const handleNoClick = () => {
    setIsValentine(false);
    setIsRaining(true); // Rozpocznij deszcz po kliknięciu "NIE"
    setIsImageVisible(true); // Ustaw widoczność zdjęcia po kliknięciu "NIE"
  };

  useEffect(() => {
    if (isValentine) {
      const intervalId = setInterval(() => {
        createHeart();
      }, 200); // Dodaj nowe serce co 0.2 sekundy

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isValentine]);

  const createHeart = () => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
      document.body.removeChild(heart);
    }, 2000); // Usuń serce po 2 sekundach
  };

  useEffect(() => {
    if (isRaining) {
      const intervalId = setInterval(() => {
        createRaindrop();
      }, 100); // Dodaj nową kroplę co 0.1 sekundy

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRaining]);

  const createRaindrop = () => {
    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(raindrop);

    setTimeout(() => {
      document.body.removeChild(raindrop);
    }, 2000); // Usuń kroplę po 2 sekundach
  };

  return (
    <div className="container">
      <div className={`image ${isImageVisible ? "visible" : "hidden"}`}></div>
      <div className="title">Zostaniesz moją walentyką?</div>
      <div className="buttons">
        <button onClick={handleYesClick}>TAK</button>
        <button onClick={handleNoClick}>NIE</button>
      </div>
      {isValentine && <HeartsWithText />}
    </div>
  );
};

const HeartsWithText = () => {
  return (
    <div className="valentine">
      <Hearts />
      <p className="text">hehehehheheh</p>
    </div>
  );
};

const Hearts = () => {
  const numberOfHearts = 20; // Ustaw liczbę serc
  const hearts = Array.from({ length: numberOfHearts });

  return (
    <>
      {hearts.map((_, index) => (
        <Heart key={index} />
      ))}
    </>
  );
};

const Heart = () => {
  const style = {
    top: `${Math.random() * window.innerHeight}px`,
    left: `${Math.random() * window.innerWidth}px`,
  };

  return <div className="heart" style={style} />;
};

export default App;
