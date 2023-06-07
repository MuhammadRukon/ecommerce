import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto gap-12 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 cursor-pointer hover:text-gray-900">Home</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Products</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Contacts</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Login</a>
          </nav>
          <button className="inline-flex items-center duration-300 bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0">
            go to cart
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
