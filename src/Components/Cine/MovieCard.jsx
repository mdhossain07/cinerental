import { useContext, useState } from "react";
import getImageUrl from "../../utils/getImageUrl";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movieData, setMovieData } = useContext(MovieContext);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const found = movieData.find((item) => item.id === movie.id);

    if (!found) {
      setMovieData([...movieData, movie]);
    } else {
      alert("Movie already rented...");
    }
  };

  return (
    <div>
      {showModal && (
        <MovieDetailsModal
          onAddCart={handleAddToCart}
          movie={selectedMovie}
          onClose={handleModalClose}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span onClick={(e) => handleAddToCart(e, movie)}>
                ${movie.price} | Add to Cart
              </span>
            </a>
          </figcaption>
        </a>
      </figure>
    </div>
  );
};

export default MovieCard;
