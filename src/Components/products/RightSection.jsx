import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-gray-900">
            {productName}
          </h1>
          <p className="mt-4 text-gray-600">{productDesription}</p>
          <div className="mt-6">
            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={imageURL}
            alt={productName}
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
