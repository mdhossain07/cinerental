import MovieList from "./Cine/MovieList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Page = () => {
  return (
    <div>
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
