import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <img src={imageURL} alt={productName} className="max-w-full h-auto" />
        </div>

        {/* Right Content Section */}
        <div className="p-5 mt-5">
          <h1 className="text-3xl font-bold mb-3">{productName}</h1>
          <p className="text-gray-600 mb-5">{productDesription}</p>

          {/* Links */}
          <div className="flex space-x-12">
            <a
              href={tryDemo}
              className="text-blue-600 hover:underline font-medium"
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              className="text-blue-600 hover:underline font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Store Badges */}
          <div className="flex items-center space-x-12 mt-5">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
