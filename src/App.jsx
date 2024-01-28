import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Components/Page";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <MovieContext.Provider value={{ movieData, setMovieData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
