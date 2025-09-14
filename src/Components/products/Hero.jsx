import React from "react";

function Hero() {
  return (
    <div className="container mx-auto mb-10">
      <div className="text-center mt-30 p-3">
        <h1 className="text-4xl font-bold">Technology</h1>
        <h3 className="text-gray-500 mt-3 text-xl">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-8 text-lg">
          Check out our{" "}
          <a
            href=""
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
