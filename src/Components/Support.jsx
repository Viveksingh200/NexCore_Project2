import React from "react";

function Support() {
    const topics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  return (
    <>
    <section id="supportHero" className="w-full bg-[rgb(56,126,209)] mt-15">
      {/* Top Section */}
      <div
        id="supportWrapper"
        className="mx-auto p-8 pl-60 pr-90 text-center flex flex-row justify-between mb-6"
      >
        <h4 className="text-xl text-white font-semibold text-gray-800">Support Portal</h4>
        <a
          href="#"
          className="text-white underline block mt-2"
        >
          Track Tickets
        </a>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 ml-16 pt-20">
        {/* Left Column */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800 text-white">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O text-white"
            className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-white"
          />
          <div className="flex flex-row space-y-2">
            <a href="#" className="text-white hover:underline">
              Track account opening 
            </a>
            <a href="#" className="text-white hover:underline pl-2">
              Track segment activation
            </a>
            <a href="#" className="text-white hover:underline pl-2">
              Intraday margins
            </a>
            <a href="#" className="text-white hover:underline pl-2">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-white">Featured</h1>
          <ol className="list-decimal list-inside space-y-2 text-white">
            <li>
              <a href="#" className="text-white hover:underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <div className="w-full max-w-7xl mx-auto p-6 mt-12 ">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-semibold text-gray-800">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-400 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
              Account Opening
            </h4>

            <div className="flex flex-col space-y-2">
              {topics.map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Support;
