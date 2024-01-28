import Logo from "../assets/logo.svg";
import Moon from "../assets/icons/moon.svg";
import Cart from "../assets/shopping-cart.svg";
import Ring from "../assets/ring.svg";
import Sun from "../assets/icons/sun.svg";
import { useContext, useState } from "react";
import CartModal from "./CartModal";
import { MovieContext, ThemeContext } from "../context";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { movieData, setMovieData } = useContext(MovieContext);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleShoppingCart = () => {
    setShowCart(true);
  };

  const handleRemoveMovie = (movieId) => {
    const remaining = movieData.filter((item) => item.id !== movieId);
    setMovieData(remaining);
  };

  return (
    <>
      {showCart && (
        <CartModal
          onRemove={handleRemoveMovie}
          movieData={movieData}
          onClose={() => setShowCart(false)}
        />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              <img src={darkTheme ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShoppingCart}
            >
              <img src={Cart} width="24" height="24" alt="" />

              {movieData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {movieData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
