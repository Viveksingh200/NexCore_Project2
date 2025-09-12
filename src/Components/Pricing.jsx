import React from 'react'

function Pricing() {
  return (
<>
<div className="max-w-7xl mx-auto">
  {/* Pricing Section */}
  <div className="px-5 py-10 mt-10 border-b text-center">
    <h1 className="text-4xl font-bold">Pricing</h1>
    <h3 className="text-gray-500 mt-3 text-lg">
      Free equity investments and flat ₹20 traday and F&O trades
    </h3>
  </div>

  <div className="px-5 py-10 mt-10 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
    <div className="p-6">
      <img src="media/images/pricingEquity.svg" className="mx-auto" />
      <h1 className="text-xl font-semibold mt-4">Free equity delivery</h1>
      <p className="text-gray-500 mt-2">
        All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
      </p>
    </div>
    <div className="p-6">
      <img src="media/images/intradayTrades.svg" className="mx-auto" />
      <h1 className="text-xl font-semibold mt-4">Intraday and F&O trades</h1>
      <p className="text-gray-500 mt-2">
        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
      </p>
    </div>
    <div className="p-6">
      <img src="media/images/pricingEquity.svg" className="mx-auto" />
      <h1 className="text-xl font-semibold mt-4">Free direct MF</h1>
      <p className="text-gray-500 mt-2">
        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
      </p>
    </div>
  </div>

  {/* Largest broker section */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    <div className="p-5">
      <img src="media/images/largestBroker.svg" className="w-full" />
    </div>
    <div className="p-5 mt-5">
      <h1 className="text-3xl font-bold">Largest stock broker in India</h1>
      <p className="mb-5 mt-3 text-gray-700">
        2+ million Zerodha clients contribute to over 15% of all retail
        order volumes in India daily by trading and investing in:
      </p>
      <div className="grid grid-cols-2 gap-4">
        <ul className="space-y-2">
          <li><p>Futures and Options</p></li>
          <li><p>Commodity derivatives</p></li>
          <li><p>Currency derivatives</p></li>
        </ul>
        <ul className="space-y-2">
          <li><p>Stocks & IPOs</p></li>
          <li><p>Direct mutual funds</p></li>
          <li><p>Bonds and Govt. Securities</p></li>
        </ul>
      </div>
      <img src="media/images/pressLogos.png" className="w-11/12 mt-6" />
    </div>
  </div>

  {/* Trust Section */}
  <div className="px-3">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Trust with confidence</h1>

        <h2 className="text-xl font-semibold">Customer-first always</h2>
        <p className="text-gray-500 mb-5">
          That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
          worth of equity investments.
        </p>

        <h2 className="text-xl font-semibold">No spam or gimmicks</h2>
        <p className="text-gray-500 mb-5">
          No gimmicks, spam, "gamification", or annoying push notifications.
          High quality apps that you use at your pace, the way you like.
        </p>

        <h2 className="text-xl font-semibold">The Zerodha universe</h2>
        <p className="text-gray-500 mb-5">
          Not just an app, but a whole ecosystem. Our investments in 30+
          fintech startups offer you tailored services specific to your needs.
        </p>

        <h2 className="text-xl font-semibold">Do better with money</h2>
        <p className="text-gray-500">
          With initiatives like Nudge and Kill Switch, we don't just
          facilitate transactions, but actively help you do better with your
          money.
        </p>
      </div>
      <div className="p-5 flex flex-col items-center">
        <img src="media/images/ecosystem.png" className="w-11/12" />
        <div className="text-center mt-5 space-x-8">
          <a href="" className="text-blue-600 hover:underline">
            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <a href="" className="text-blue-600 hover:underline">
            Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Pricing cards */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10">
    <div className="md:col-span-4">
      <h1 className="mb-3 text-3xl font-bold">Unbeatable pricing</h1>
      <p>
        We pioneered the concept of discount broking and price transparency
        in India. Flat fees and no hidden charges.
      </p>
      <a href="" className="text-blue-600 hover:underline">
        See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
    <div className="md:col-span-2"></div>
    <div className="md:col-span-6 mb-5">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-6 border rounded">
          <h1 className="text-3xl font-bold mb-3">₹0</h1>
          <p>
            Free equity delivery and <br /> direct mutual funds
          </p>
        </div>
        <div className="p-6 border rounded">
          <h1 className="text-3xl font-bold mb-3">₹20</h1>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  </div>

  {/* Education Section */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    <div>
      <img src="media/images/education.svg" className="w-3/4" />
    </div>
    <div>
      <h1 className="mb-3 text-3xl font-bold">Free and open market education</h1>
      <p>
        Varsity, the largest online stock market education book in the world
        covering everything from the basics to advanced trading.
      </p>
      <a href="" className="text-blue-600 hover:underline">
        Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
      <p className="mt-5">
        TradingQ&A, the most active trading and investment community in
        India for all your market related queries.
      </p>
      <a href="" className="text-blue-600 hover:underline">
        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>

</>
  )
}

export default Pricing