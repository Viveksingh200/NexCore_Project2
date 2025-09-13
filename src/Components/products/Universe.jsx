import React from "react";

function Universe() {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          The Zerodha Universe
        </h1>
        <p className="mt-2 text-gray-600">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid of Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mt-10">
        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="h-16 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">
            Thematic investment platform
          </p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="h-16 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">Algo & strategy platform</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="h-12 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">Options trading platform</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Fundhouse"
            className="h-16 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">Asset management</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="h-16 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">Bonds trading platform</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="h-16 object-contain"
          />
          <p className="mt-3 text-sm text-gray-500">Insurance</p>
        </div>
      </div>

      {/* Signup Button */}
      <div className="flex justify-center">
        <button className="mt-10 mb-10 w-1/3 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
