import React from 'react'

function About() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4">
  {/* Hero Section */}
  <div className="flex flex-col items-center text-center py-20 mt-20">
    <h1 className="text-3xl md:text-4xl font-semibold leading-relaxed">
      We pioneered the discount broking model in India
      <br />
      Now, we are breaking ground with our technology.
    </h1>
  </div>

  {/* About Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-400 text-gray-600 py-12 text-lg leading-relaxed">
    <div className="space-y-6">
      <p>
        We kick-started operations on the 15th of August, 2010 with the goal of
        breaking all barriers that traders and investors face in India in terms
        of cost, support, and technology. We named the company Zerodha, a
        combination of Zero and "Rodha", the Sanskrit word for barrier.
      </p>
      <p>
        Today, our disruptive pricing models and in-house technology have made
        us the biggest stock broker in India.
      </p>
      <p>
        Over 1+ Crore clients place millions of orders every day through our
        powerful ecosystem of investment platforms, contributing over 15% of all
        Indian retail trading volumes.
      </p>
    </div>

    <div className="space-y-6">
      <p>
        In addition, we run a number of popular open online educational and
        community initiatives to empower retail traders and investors.
      </p>
      <p>
        <a href="#" className="text-blue-600 hover:underline">
          Rainmatter
        </a>
        , our fintech fund and incubator, has invested in several fintech
        startups with the goal of growing the Indian capital markets.
      </p>
      <p>
        And yet, we are always up to something new every day. Catch up on the
        latest updates on our blog or see what the media is saying about us.
      </p>
    </div>
  </div>
</div>

{/* People Section */}
<div className="max-w-7xl mx-auto px-4">
  

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 text-lg leading-relaxed mt-12">
    <div className="flex flex-col items-center text-center">
      <img
        src="media/images/nithinKamath.jpg"
        alt="Nithin Kamath"
        className="rounded-full w-1/2"
      />
      <h4 className="mt-6 text-xl font-semibold">Nithin Kamath</h4>
      <h6 className="text-gray-500">Founder, CEO</h6>
    </div>

    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">People</h1>
      <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
        he faced during his decade long stint as a trader. Today, Zerodha has
        changed the landscape of the Indian broking industry.
      </p>
      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
        and the Market Data Advisory Committee (MDAC).
      </p>
      <p>Playing basketball is his zen.</p>
      <p>
        Connect on{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Homepage
        </a>{" "}
        /{" "}
        <a href="#" className="text-blue-600 hover:underline">
          TradingQnA
        </a>{" "}
        /{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Twitter
        </a>
      </p>
    </div>
  </div>
</div>
</>
  )
}

export default About