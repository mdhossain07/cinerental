import { useContext } from "react";
import MovieList from "./Cine/MovieList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../context";

const Page = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkTheme ? "dark" : ""}`}>
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
