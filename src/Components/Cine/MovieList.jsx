import data from "../../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {data.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
