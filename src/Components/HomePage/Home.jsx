import React from 'react'
import OpenAccount from './OpenAccount'

function Home() {
  return (
    <div>
      {/* 1 Hero section */}
      <div className="container mx-auto p-5 mb-5">
        <div className="text-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5 mx-auto"
          />
          <h1 className="mt-5 text-4xl font-bold">Invest in everything</h1>
          <p className="mt-2 text-lg text-gray-600">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <button className="mt-5 mb-5 w-1/5 p-2 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition mx-auto block">
            Signup Now
          </button>
        </div>
      </div>

      {/* 2 awards*/}
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-5">
            <img src="media/images/largestBroker.svg" alt="Largest Broker" />
          </div>
          <div className="p-5 mt-5">
            <h1 className="text-3xl font-bold">Largest stock broker in India</h1>
            <p className="mb-5 text-gray-600">
              2+ million Zerodha clients contribute to over 15% of all retail order
              volumes in India daily by trading and investing in:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-700">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="mt-5 w-[90%]"
            />
          </div>
        </div>
      </div>

      {/* 3 stats*/}
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Trust with confidence</h1>
            <h2 className="text-xl font-semibold">Customer-first always</h2>
            <p className="text-gray-600">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
            <h2 className="text-xl font-semibold mt-4">No spam or gimmicks</h2>
            <p className="text-gray-600">
              No gimmicks, spam, "gamification", or annoying push notifications. High
              quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="text-xl font-semibold mt-4">The Zerodha universe</h2>
            <p className="text-gray-600">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech
              startups offer you tailored services specific to your needs.
            </p>
            <h2 className="text-xl font-semibold mt-4">Do better with money</h2>
            <p className="text-gray-600">
              With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
          <div className="p-5">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              className="w-[90%] mx-auto"
            />
            <div className="text-center mt-4 space-x-6">
              <a href="#" className="text-blue-600 hover:underline">
                Explore our products →
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Try Kite demo →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4  pricing*/}
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="mb-3 text-3xl font-bold">Unbeatable pricing</h1>
            <p className="text-gray-600">
              We pioneered the concept of discount broking and price transparency in
              India. Flat fees and no hidden charges.
            </p>
            <a href="#" className="text-blue-600 hover:underline inline-block mt-2">
              See Pricing →
            </a>
          </div>
          <div></div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 border rounded-lg">
              <h1 className="mb-3 text-3xl font-bold">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h1 className="mb-3 text-3xl font-bold">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 education  */}

      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="flex justify-center">
            <img
              src="media/images/education.svg"
              alt="Education"
              className="w-[70%]"
            />
          </div>

          {/* Right Column */}
          <div>
            <h1 className="mb-3 text-3xl font-bold">Free and open market education</h1>
            <p className="text-gray-600">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-blue-600 hover:underline inline-flex items-center mt-2">
              Versity <span className="ml-1">→</span>
            </a>

            <p className="mt-5 text-gray-600">
              TradingQ&amp;A, the most active trading and investment community in India
              for all your market related queries.
            </p>
            <a href="#" className="text-blue-600 hover:underline inline-flex items-center mt-2">
              TradingQ&amp;A <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 5 Open Account */}
      <OpenAccount />

    </div>
  )
}

export default Home