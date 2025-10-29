import React from 'react';

function Team() {
    return ( 
        <div className='container-fluid bg-black text-white py-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-center g-5'>
                    <div className='col-12 col-md-5 col-lg-4'>
                        <div className='position-relative'>
                            <img 
                                src="media/WhatsApp Image 2025-10-14 at 07.20.41.jpeg" 
                                className='img-fluid transition-scale'
                                style={{
                                    borderRadius: "50%",
                                    height: "350px",
                                    width: "350px",
                                    objectFit: "cover",
                                }}
                                alt="Nithin Kamath"
                            ></img>
                            <div className='position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-primary border-2 opacity-0 hover-opacity'></div>
                        </div>
                        
                        <div className='mt-4 text-center'>
                            <p className='fs-3 fw-bold text-primary mb-1 transition-color'>Nithin Kamath</p>
                            <p className='fs-6 text-light opacity-75'>Founder, CEO</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 col-lg-6'>
                        <div className='content-card p-4 p-lg-5 h-100'>
                            <p className='fs-5 lh-lg mb-4 transition-slide'>
                                <span className='text-primary fw-semibold'>Nithin bootstrapped and founded Zerodha in 2010</span> to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                            </p>
                            
                            <p className='fs-5 lh-lg mb-4 transition-slide'>
                                He is a member of the <span className='text-info'>SEBI Secondary Market Advisory Committee (SMAC)</span> and the <span className='text-info'>Market Data Advisory Committee (MDAC)</span>.
                            </p>
                            
                            <p className='fs-5 lh-lg mb-4 transition-slide'>
                                <span className='text-warning'>Playing basketball is his zen.</span>
                            </p>
                            
                            <p className='fs-5 lh-lg mb-0 transition-slide'>
                                Connect on <span className='text-primary'>Homepage</span> / <span className='text-primary'>TradingQnA</span> / <span className='text-primary'>Twitter</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .content-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.3);
                }
                .content-card:hover {
                    border-color: rgba(13, 110, 253, 0.5);
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(13, 110, 253, 0.15);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 30px rgba(13, 110, 253, 0.3);
                }
                .transition-color {
                    transition: all 0.3s ease;
                }
                .transition-color:hover {
                    color: #0dcaf0 !important;
                    text-shadow: 0 0 10px rgba(13, 202, 240, 0.3);
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateX(0);
                }
                .transition-slide:hover {
                    transform: translateX(10px);
                    color: #e9ecef !important;
                }
                .hover-opacity {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover + .hover-opacity {
                    opacity: 1 !important;
                }
            `}</style>
        </div>
    );
}

export default Team;