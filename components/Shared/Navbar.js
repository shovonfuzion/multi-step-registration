import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    // Navigation started
    <nav className="bg-orange-50 py-1">
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-between items-center">
            {/* Navbar Logo  */}
            <div>
              <Image src={logo} width="180px" height="80px" alt="" />
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
