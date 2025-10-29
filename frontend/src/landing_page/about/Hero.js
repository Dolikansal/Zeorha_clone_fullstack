import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid bg-black'>
            <div className='container'>
                {/* Main Heading */}
                <div className='row justify-content-center py-5'>
                    <div className='col-12 col-lg-10 col-xl-8'>
                        <h1 className='display-5 fw-bold text-center text-white mb-4 transition-scale'>
                            We pioneered the discount broking model in India.
                            <span className='d-block mt-3 text-primary transition-color'>Now, we are breaking ground with our technology.</span>
                        </h1>
                    </div>
                </div>

                {/* Animated Divider */}
                <div className='row justify-content-center mb-5'>
                    <div className='col-8 col-md-6'>
                        <div className='position-relative'>
                            <div className='border-top border-2 border-primary opacity-50 transition-all'></div>
                            <div className='position-absolute top-0 start-0 w-25 h-100 bg-primary' 
                                 style={{
                                     animation: 'slide 3s ease-in-out infinite',
                                     opacity: 0.7
                                 }}></div>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className='row g-4 g-lg-5 pb-5'>
                    <div className='col-12 col-lg-6'>
                        <div className='p-4 p-lg-5 h-100 content-card'>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                            </p>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                            </p>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                            </p>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <div className='p-4 p-lg-5 h-100 content-card'>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                            </p>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                            </p>
                            <p className='fs-5 text-light lh-lg mb-4 transition-slide'>
                                And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .content-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.3);
                }
                .content-card:hover {
                    border-color: rgba(13, 110, 253, 0.5);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(13, 110, 253, 0.2);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.02);
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    color: #0dcaf0 !important;
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateX(0);
                }
                .transition-slide:hover {
                    transform: translateX(10px);
                    color: #e9ecef !important;
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                @keyframes slide {
                    0%, 100% {
                        transform: translateX(0%);
                    }
                    50% {
                        transform: translateX(300%);
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;