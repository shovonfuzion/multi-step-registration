import React from "react";

const ThankYou = () => {
  return (
    <div className="text-center flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-5xl font-bold font-serif mb-10 text-green-400 text-center">
          Thank you for you Application.
        </h1>
        <p className="text-lg mb-10">
          Your Application ID:{" "}
          <span className="font-bold">SMM-99-DD-MM-YY-000001</span>
        </p>
        <p className="font-bold">
          If you have any query or suggession feel free to inbox me.....
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
