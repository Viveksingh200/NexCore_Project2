import React from "react";

function Footer() {
  const companyLinks = [
    "About",
    "Products",
    "Pricing",
    "Referral programme",
    "Careers",
    "Zerodha.tech",
    "Press & media",
    "Zerodha cares (CSR)",
  ];

  const supportLinks = [
    "Contact",
    "Support portal",
    "Z-Connect blog",
    "List of charges",
    "Downloads & resources",
  ];

  const accountLinks = ["Open an account", "Fund transfer", "60 day challenge"];

  return (
    <>
        
    <footer className="bg-gray-50 mt-10">
      <hr className="opacity-10"/>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Copy */}
          <div>
            <img src="media/images/logo.svg" alt="Company Logo" className="w-1/2" />
            <p className="mt-3 text-sm text-gray-600">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-gray-800 mb-2">Company</p>
            <ul className="space-y-1">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-semibold text-gray-800 mb-2">Support</p>
            <ul className="space-y-1">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <p className="font-semibold text-gray-800 mb-2">Account</p>
            <ul className="space-y-1">
              {accountLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 text-xs text-gray-500 space-y-4">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. –
            SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha
            Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
            details: Name, PAN, Address, Mobile Number, Email ID. Benefits: Effective
            communication, speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related
            documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile/email IDs
            with your stock brokers. Receive transaction information directly from Exchange
            on your mobile/email at the end of the day. KYC is one-time exercise while dealing
            in securities markets. As a business we don’t give stock tips, and have not
            authorized anyone to trade on behalf of others.
          </p>
        </div>
      </div>
    </footer>
    </>

  );
}

export default Footer;
