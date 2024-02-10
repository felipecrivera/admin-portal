import React from "react";

function Navbar() {
  return (
    <nav
      className="flex space-x-4 lg:space-x-8"
      aria-label="Tabs"
      role="tablist"
    >
      <button
        type="button"
        className="active inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary"
        id="todays-stats-tab-btn"
        data-hs-tab="#todays-stats-tab"
        aria-controls="todays-stats-tab"
        role="tab"
      >
        Today's Stats
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary"
        id="this-week-tab-btn"
        data-hs-tab="#this-week-tab"
        aria-controls="this-week-tab"
        role="tab"
      >
        This Week
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary"
        id="this-month-tab-btn"
        data-hs-tab="#this-month-tab"
        aria-controls="this-month-tab"
        role="tab"
      >
        This Month
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary"
        id="this-month-tab-btn"
        data-hs-tab="#this-month-tab"
        aria-controls="this-month-tab"
        role="tab"
      >
        This Quarter
      </button>
    </nav>
  );
}

export default Navbar;
