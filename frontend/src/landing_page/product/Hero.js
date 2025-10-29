import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid text-white py-5 text-center'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-8'>
                        <h1 className='display-4 fw-bold text-primary mb-3 transition-scale'>
                            Zerodha Products
                        </h1>
                        <h5 className='fs-3 text-light mb-4 transition-slide'>
                            Sleek, modern, and intuitive trading platforms
                        </h5>
                        <div className='transition-color'>
                            <p className='fs-5 text-light opacity-75 mb-0 hover-arrow'>
                                Check out our investment offerings →
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.05);
                    text-shadow: 0 0 20px rgba(13, 110, 253, 0.4);
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateY(0);
                }
                .transition-slide:hover {
                    transform: translateY(-5px);
                    color: #e9ecef !important;
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    transform: translateY(-2px);
                }
                .hover-arrow {
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .transition-color:hover .hover-arrow {
                    color: #0dcaf0 !important;
                    transform: translateX(10px);
                    text-shadow: 0 0 15px rgba(13, 202, 240, 0.3);
                }
            `}</style>
        </div>
    );
}

export default Hero;