import React from 'react'
import OpenAccount from './HomePage/OpenAccount'

function Pricing() {
  return (
<>
<div className="max-w-7xl mx-auto">
  {/* Pricing Section */}
  <div className="px-5 py-10 mt-20 text-center">
    <h1 className="text-4xl font-bold">Pricing</h1>
    <h3 className="text-gray-500 mt-3 text-lg">
      Free equity investments and flat ₹20 traday and F&O trades
    </h3>
  </div>

  <div className="px-5 py-10 mt-10 grid grid-cols-1 md:grid-cols-3 text-center gap-6 border-t border-gray-300">
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

  <OpenAccount/>
</div>
<div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mt-10 text-center border-t border-gray-300">
        {/* Left Column */}
        <div className="md:col-span-2 p-4">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold text-blue-500">
              Brokerage calculator
            </h3>
          </a>
          <ul className="text-left leading-7 text-xs text-gray-600 mt-4 space-y-2">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="p-4 flex flex-col items-center justify-start">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold text-blue-500">List of charges</h3>
          </a>
        </div>
      </div>
    </div>

</>
  )
}

export default Pricing