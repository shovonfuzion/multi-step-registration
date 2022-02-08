import Image from "next/image";
import facebook from "../../image/social/facebook.png";
import google from "../../image/social/google.png";
import twitter from "../../image/social/twitter.png";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* <!-- Footer Top section --> */}
      <div className="p-16 bg-green-900">
        <div className="container mx-auto md:flex md:justify-between">
          {/* <!-- logo  --> */}

          {/* <!-- information --> */}
          <div className="lg:w-1/6 mb-3">
            <h3 className="text-lg uppercase font-bold">Menu Name</h3>
            <div className="flex flex-col">
              <a className="" href="#">
                Delivery
              </a>
              <a className="" href="#">
                Legal Notice
              </a>
              <a className="" href="#">
                Terms and Condition
              </a>
              <a className="" href="#">
                About Us
              </a>
              <a className="" href="#">
                Returns
              </a>
            </div>
          </div>
          {/* <!-- about company --> */}
          <div className="lg:w-1/6  mb-3">
            <h3 className="text-lg font-bold uppercase">About company</h3>
            <div className="flex flex-col">
              <a className="" href="#">
                FAQ
              </a>
              <a className="" href="#">
                Media
              </a>
              <a className="" href="#">
                Menu
              </a>
              <a className="" href="#">
                Additional Menu
              </a>
            </div>
          </div>
          {/* <!-- company --> */}
          <div className="lg:w-1/6">
            <h3 className="text-lg font-bold uppercase">Contact us</h3>
            <div className="flex flex-col">
              <a className="" href="#">
                hello@gmail.com
              </a>
              <a className="" href="#">
                support@gmail.com
              </a>
              <a className="" href="#">
                017000000000
              </a>
            </div>
          </div>
          {/* <!-- contact --> */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-bold uppercase">Stay in touch</h3>
            <form className="flex justify-between">
              <input
                className="w-2/3 py-1 font-normal focus:outline-none bg-green-900 text-white"
                type="text"
                placeholder="Enter your email"
              />
              <button className="rounded-lg bg-geen-900 py-1 mb-1 border-2 border-orange-500 text-black px-4 float-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-7 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
            <hr />
          </div>
        </div>
      </div>

      {/* <!-- Footer Bottom section  --> */}
      <div className="p-5 bg-black">
        <div className="container mx-auto md:flex md:justify-between md:items-center">
          <div>
            <p className="mt-2">
              © 2021 Swadesh, All Rights Reserved Privecy Policy Terms &
              Condition
            </p>
          </div>
          <div className="flex items-center space-x-10">
            <div>
              <a href="#" className="mr-3">
                <Image className="" src={google} alt="google" />
              </a>
              <a href="#" className="mr-3">
                <Image className="" src={facebook} alt="facebook" />
              </a>
              <a href="#" className="mr-3">
                <Image className="" src={twitter} alt="twitter" />
              </a>
            </div>
            <button className="bg-green-200 rounded-full py-2 mb-1 flex justify-center items-center space-x-1 text-black px-4 float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold"> Help</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
