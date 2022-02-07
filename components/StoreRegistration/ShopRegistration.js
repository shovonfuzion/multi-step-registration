import React from "react";
import Form from "./Form";

const ShopRegistration = () => {
  return (
    <div className="container mx-auto bg-green-200 rounded-lg">
      {/* Shop Registration start */}
      <section>
        <div className="grid grid-cols-3 gap-4 justify-center items-center">
          <div className="p-10">
            <div className="text-center font-serif">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
              <h2 className="text-5xl">Join Us</h2>
              <p className="my-5">
                <span className="text-xl font-bold">Swadesh Bangladesh</span>{" "}
                Enterprise is an emerging future company that will encode
                several projects.
              </p>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-green-500">
                About Us
              </button>
            </div>
          </div>
          <div className="p-10 col-span-2">
            <Form></Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopRegistration;
