import React from 'react';

function Univers() {
    return ( 
        <div className='container-fluid bg-black text-white py-5'>
            <div className='container'>
                {/* Header Section */}
                <div className='row justify-content-center mb-5 text-center'>
                    <div className='col-12 col-lg-8'>
                        <p className='fs-4 text-primary transition-color mb-4'>
                            Want to know more about our technology stack? Check out the Zerodha.tech blog.
                        </p>
                        <h2 className='display-5 fw-bold text-white mb-3 transition-scale'>The Zerodha Universe</h2>
                        <p className='fs-5 text-light opacity-75 transition-slide'>
                            Extend your trading and investment experience even further with our partner platforms
                        </p>
                    </div>
                </div>

                {/* First Row of Cards */}
                <div className='row justify-content-center g-4 g-lg-5 mb-4'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="media/Gemini_Generated_Image_498hda498hda498h.png" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Zerodha AMC"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="media/WhatsApp Image 2025-10-13 at 22.09.48.jpeg" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Streak"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="https://zerodha.com/static/images/partners/tijori.svg" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Tijori"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Row of Cards */}
                <div className='row justify-content-center g-4 g-lg-5'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="media/WhatsApp Image 2025-10-13 at 22.08.46.jpeg" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Smallcase"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="media/Gemini_Generated_Image_djzekrdjzekrdjze.png" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Ditto"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Personalized advice on life and health insurance. No spam and no mis-selling.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='universe-card p-4 h-100 text-center'>
                            <img 
                                src="media/WhatsApp Image 2025-10-13 at 22.08.48.jpeg" 
                                height="70px" 
                                className='mb-3 transition-scale'
                                alt="Sentinel"
                            />
                            <p className='fs-6 text-light lh-base'>
                                Systematic trading platform that allows you to create and backtest strategies without coding
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .universe-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.3);
                }
                .universe-card:hover {
                    border-color: rgba(13, 110, 253, 0.5);
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(13, 110, 253, 0.15);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.1);
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    color: #0dcaf0 !important;
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

export default Univers;