import React from 'react';

function Brokenpage() {
    return (
        <div className='container-fluid bg-black py-5'>
            <div className='container'>
                {/* Main Header */}
                <div className='row justify-content-center mb-5'>
                    <div className='col-12 text-center'>
                        <h2 className='display-4 fw-bold text-primary mb-3 transition-scale'>Charges explained</h2>
                    </div>
                </div>

                {/* Two Column Content */}
                <div className='row justify-content-center g-5'>
                    {/* Left Column */}
                    <div className='col-12 col-lg-6' style={{fontSize: "13px"}}>
                        <div className='charges-section p-4 p-lg-5 h-100'>
                            <ChargeItem 
                                title="Securities/Commodities transaction tax"
                                content={
                                    <>
                                        <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                                        <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                                    </>
                                }
                            />
                            
                            <ChargeItem 
                                title="Transaction/Turnover Charges"
                                content={
                                    <>
                                        <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                                        <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                                        <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                                        <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                                    </>
                                }
                            />
                            
                            <ChargeItem 
                                title="Call & trade"
                                content={<p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>}
                            />
                            
                            <ChargeItem 
                                title="NRI brokerage charges"
                                content={
                                    <ul>
                                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                                    </ul>
                                }
                            />
                            
                            <ChargeItem 
                                title="Account with debit balance"
                                content={<p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>}
                            />
                            
                            <ChargeItem 
                                title="Charges for Investor's Protection Fund Trust (IPFT) by NSE"
                                content={
                                    <ul>
                                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                                    </ul>
                                }
                            />
                            
                            <ChargeItem 
                                title="Margin Trading Facility (MTF)"
                                content={
                                    <ul>
                                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                                    </ul>
                                }
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='col-12 col-lg-6' style={{fontSize: "13px"}}>
                        <div className='charges-section p-4 p-lg-5 h-100'>
                            <ChargeItem 
                                title="GST"
                                content={<p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>}
                            />
                            
                            <ChargeItem 
                                title="SEBI Charges"
                                content={<p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>}
                            />
                            
                            <ChargeItem 
                                title="DP (Depository participant) charges"
                                content={
                                    <>
                                        <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                                        <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                                        <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                                    </>
                                }
                            />
                            
                            <ChargeItem 
                                title="Pledging charges"
                                content={<p>₹30 + GST per pledge request per ISIN.</p>}
                            />
                            
                            <ChargeItem 
                                title="AMC (Account maintenance charges)"
                                content={
                                    <>
                                        <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                                        <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                                    </>
                                }
                            />
                            
                            <ChargeItem 
                                title="Corporate action order charges"
                                content={<p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>}
                            />
                            
                            <ChargeItem 
                                title="Off-market transfer charges"
                                content={<p>₹25 per transaction.</p>}
                            />
                            
                            <ChargeItem 
                                title="Physical CMR request"
                                content={<p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>}
                            />
                            
                            <ChargeItem 
                                title="Payment gateway charges"
                                content={<p>₹9 + GST (Not levied on transfers done via UPI)</p>}
                            />
                            
                            <ChargeItem 
                                title="Delayed Payment Charges"
                                content={<p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>}
                            />
                            
                            <ChargeItem 
                                title="Trading using 3-in-1 account with block functionality"
                                content={
                                    <ul>
                                        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                                        <li>Intraday Brokerage: 0.05% per executed order.</li>
                                    </ul>
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className='row justify-content-center mt-5'>
                    <div className='col-12 col-lg-10'>
                        <div className='disclaimer-card p-4 p-lg-5'>
                            <h3 className='text-warning mb-4 transition-color'>Disclaimer</h3>
                            <p className='text-light opacity-75 fs-6 lh-base transition-slide'>
                                For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .charges-section {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }
                .charges-section:hover {
                    border-color: rgba(13, 110, 253, 0.2);
                    box-shadow: 0 10px 30px rgba(13, 110, 253, 0.1);
                }
                .disclaimer-card {
                    border: 1px solid rgba(255, 193, 7, 0.2);
                    border-radius: 1rem;
                    background: rgba(255, 193, 7, 0.05);
                    transition: all 0.3s ease;
                }
                .disclaimer-card:hover {
                    border-color: rgba(255, 193, 7, 0.4);
                    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.1);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.02);
                    text-shadow: 0 0 20px rgba(13, 110, 253, 0.3);
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    color: #ffc107 !important;
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateX(0);
                }
                .transition-slide:hover {
                    transform: translateX(5px);
                    color: #e9ecef !important;
                }
                .charge-item {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1.5rem 0;
                }
                .charge-item:hover {
                    transform: translateX(10px);
                }
                .charge-item:last-child {
                    border-bottom: none;
                }
            `}</style>
        </div>
    );
}

const ChargeItem = ({ title, content }) => (
    <div className='charge-item'>
        <h4 className='text-info fw-bold mb-3 transition-color'>{title}</h4>
        <div className='text-light opacity-75 lh-base'>
            {content}
        </div>
    </div>
);

export default Brokenpage;