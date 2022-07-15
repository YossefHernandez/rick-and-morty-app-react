import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

function App() {
  const [characters, setcharacters] = useState([]);
  const [info, setinfo] = useState({});

  const InitUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(InitUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick And Morty API App" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
       
       />
      </div>
    </>
  );
}

export default App;
