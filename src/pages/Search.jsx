import pagesData from "../data/pages.json";

function Search() {
  return (
    <section className="relative bg-gray-900 py-20 px-6 pt-28 text-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {pagesData.search.heading}
        </h1>
        <p className="text-lg md:text-xl text-red-100 italic">
          {pagesData.search.subtitle}
        </p>
      </div>
    </section>
  );
}

export default Search;