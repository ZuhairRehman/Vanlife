const Header = () => {
  return (
    <header className="sticky top-0 left-0 sm:w-full sm:h-[4vh] sm:mb-[1vh] z-30">
      <nav className="flex justify-between items-center py-4 sm:px-5 px-2 font-sans bg-[#fddfba] sticky top-0 left-0 w-full z-30">
        <section>
          <Link
            className="sm:text-4xl text-3xl font-semibold no-underline text-black"
            to="/"
          >
            #VANLIFE
          </Link>
        </section>

        <div className="flex sm:gap-11 gap-7 *: no-underline *:text-[#646464] max-sm:text-sm text-2xl font-semibold">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
