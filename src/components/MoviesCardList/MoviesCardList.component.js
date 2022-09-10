import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import imgPath from "../../images/card/card-no-img.jpg";

const MoviesCardList = () => {
  return (
    <div>
      <MoviesCard
        card={{
          nameRU: "33 слова о дизайне",
          duration: "1ч 47м",
          image: imgPath,
        }}
      />
    </div>
  );
};

export default MoviesCardList;
