function Navbar({ currentActiveFilter, setCurrentActiveFilter }) {
  return (
    <nav
      className="flex space-x-4 lg:space-x-8"
    >
      <button
        type="button"
        className={`inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50   ${
          currentActiveFilter == 1
            ? "active border-secondary text-secondary"
            : ""
        }`}
        onClick={(e) => setCurrentActiveFilter(1)}
      >
        Today's Stats
      </button>
      <button
        type="button"
        className={`inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50  ${
          currentActiveFilter == 2
            ? "active border-secondary text-secondary"
            : ""
        }`}
        onClick={(e) => setCurrentActiveFilter(2)}
      >
        This Week
      </button>
      <button
        type="button"
        className={`inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50  ${
          currentActiveFilter == 3
            ? "active border-secondary text-secondary"
            : ""
        }`}
        onClick={(e) => setCurrentActiveFilter(3)}
      >
        This Month
      </button>
      <button
        type="button"
        className={`inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50  ${
          currentActiveFilter == 4
            ? "active border-secondary text-secondary"
            : ""
        }`}
        onClick={(e) => setCurrentActiveFilter(4)}
      >
        This Quarter
      </button>
    </nav>
  );
}

export default Navbar;
