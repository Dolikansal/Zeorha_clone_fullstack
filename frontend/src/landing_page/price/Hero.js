import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid bg-black py-5'>
            <div className='container'>
                {/* Header Section */}
                <div className='row justify-content-center mb-5'>
                    <div className='col-12 col-lg-8 text-center'>
                        <h1 className='display-4 fw-bold text-primary mb-3 transition-scale'>Charges</h1>
                        <p className='fs-3 text-light opacity-75 transition-slide'>List of all charges and taxes</p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className='row justify-content-center g-4 g-lg-5'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='charges-card p-4 h-100 text-center'>
                            <img 
                                src="media/Gemini_Generated_Image_ds74nyds74nyds74.png" 
                                className='img-fluid mb-4 transition-scale'
                                style={{height: "250px", objectFit: "contain"}}
                                alt="Free Equity Delivery"
                            />
                            <h2 className='fs-3 fw-bold text-primary mb-3 transition-color'>Free equity delivery</h2>
                            <p className='fs-5 text-light lh-base'>
                                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                            </p>
                        </div>
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='charges-card p-4 h-100 text-center'>
                            <img 
                                src="media/Gemini_Generated_Image_wgjvm1wgjvm1wgjv.png" 
                                className='img-fluid mb-4 transition-scale'
                                style={{height: "250px", objectFit: "contain"}}
                                alt="Intraday and F&O Trades"
                            />
                            <h2 className='fs-3 fw-bold text-info mb-3 transition-color'>Intraday and F&O trades</h2>
                            <p className='fs-5 text-light lh-base'>
                                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                            </p>
                        </div>
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='charges-card p-4 h-100 text-center'>
                            <img 
                                src="media/Gemini_Generated_Image_ds74nyds74nyds74.png" 
                                className='img-fluid mb-4 transition-scale'
                                style={{height: "250px", objectFit: "contain"}}
                                alt="Free Direct MF"
                            />
                            <h2 className='fs-3 fw-bold text-success mb-3 transition-color'>Free direct MF</h2>
                            <p className='fs-5 text-light lh-base'>
                                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .charges-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.3);
                }
                .charges-card:hover {
                    border-color: rgba(13, 110, 253, 0.5);
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(13, 110, 253, 0.2);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.05);
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    color: #0dcaf0 !important;
                    text-shadow: 0 0 15px rgba(13, 202, 240, 0.3);
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateY(0);
                }
                .transition-slide:hover {
                    transform: translateY(-3px);
                    color: #e9ecef !important;
                }
            `}</style>
        </div>
     );
}

export default Hero;