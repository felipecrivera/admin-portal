import React from "react";
import logo from "../../assets/img/sidebar-bg.jpg";
import appLogo from "../../assets/img/prospectiq-logo.svg";
import iqConnectLogo from "../../assets/img/iqconnect.png";
import prospectiqLogo from "../../assets/img/prospectiq-logo.svg";

function Header() {
  return (
    <header className="relative w-full py-4 lg:h-full lg:w-72 lg:py-8">
      <div
        className={`absolute inset-0 -z-10 h-20 w-full bg-primary bg-[url(${logo})] bg-cover bg-center bg-no-repeat lg:h-full lg:w-96`}
      ></div>

      <div className="relative z-10 flex h-full justify-between gap-10 px-5 lg:flex-col">
        <a href="" className="block">
          <img src={appLogo} alt="ProspectIQ Logo" className="h-8 lg:h-10" />
        </a>

        <ul className="hidden flex-1 space-y-1.5 lg:block">
          <li>
            <a
              className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
              href="/"
            >
              <span className="text-secondary transition group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
              href="/report"
            >
              <span className="text-secondary transition group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </span>
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
              href="/billings"
            >
              <span className="text-secondary transition group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </span>
              <span>Billings</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
              href="/record"
            >
              <span className="text-secondary transition group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </span>
              <span>Records</span>
            </a>
          </li>
        </ul>

        <div className="hidden lg:block">
          <img src={iqConnectLogo} alt="" className="h-5" />
        </div>

        <button
          type="button"
          className="text-white/70 transition hover:text-white lg:hidden"
          data-hs-overlay="#mobile-sidebar"
          aria-controls="mobile-sidebar"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="h-9 w-9 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      <div
        id="mobile-sidebar"
        className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto bg-primary transition-all duration-300 hs-overlay-open:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2"
      >
        <div className="flex h-full flex-col justify-between gap-5 p-5">
          <div className="">
            <a href="" className="block">
              <img
                src={prospectiqLogo}
                alt="ProspectIQ Logo"
                className="h-8 lg:h-10"
              />
            </a>
          </div>
          <nav
            className="hs-accordion-group mt-3 flex w-full flex-1 flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="flex-1 space-y-1.5">
              <li>
                <a
                  className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
                  href="index.html"
                >
                  <span className="text-secondary transition group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="M9 22V12h6v10" />
                    </svg>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="">
            <img src={iqConnectLogo} alt="" className="h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
