import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    // Navigation started
    <nav className="bg-orange-50 py-3">
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-between items-center">
            {/* Navbar Logo  */}
            <div>
              <Image src={logo} width="180px" height="100px" alt="" />
            </div>

            {/* Navbar Search-bar */}
            {/* <div className="w-1/3 flex justify-center">
              <select className="w-1/5 px-3 py-2 bg-white rounded-tl-full rounded-bl-full border-y-2 border-l-2 border-gray-300 focus:outline-none">
                <option value="shop">All</option>
                <option value="shop">Shop</option>
                <option value="vendor">Vendor</option>
                <option value="enterprise">Enterprise</option>
                <option value="seriesStores">Series Stores</option>
                <option value="brands">Brands</option>
              </select>
              <button className="px-3 py-2 bg-white border-y-2 border-l-2 border-gray-300 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                className="pr-3 py-2 mr-2 w-full rounded-tr-full rounded-br-full border-y-2 border-r-2 border-gray-300 focus:outline-none"
                type="text"
                name="search-bar"
                placeholder="Search anything"
                id=""
              />
            </div> */}

            {/* Navbar Icons */}
            <div className="flex justify-center items-center">
              {/* love icon */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-primarycolor"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* cart icon */}

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-primarycolor"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </a>

              {/* profile icon */}
              <div id="menu-btn">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primarycolor"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
