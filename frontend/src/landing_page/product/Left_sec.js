import React from 'react';

function Left({ imgurl, productname, productdescript, trydemo, learnmore, googleplay, appstore }) {
    return ( 
        <div className='container-fluid bg-black text-white py-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-12 col-md-6 mb-4 mb-md-0'>
                        <img 
                            src={imgurl} 
                            alt={productname}
                            className='img-fluid rounded-3 transition-scale'
                        />
                    </div>
                    
                    {/* Content Column */}
                    <div className='col-12 col-md-6' >
                        <h1 className='display-5 fw-bold text-primary mb-4 transition-color' style={{ width: '90%', margin: '0 auto' }} >
                            {productname}
                        </h1>
                        <p className='fs-5 text-light lh-lg mb-4 transition-slide' style={{ width: '90%', margin: '0 auto' }}>
                            {productdescript}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className='d-flex gap-3 mb-4' style={{ width: '90%', margin: '0 auto' }}>
                            <a 
                                href={trydemo} 
                                className='btn btn-primary px-4 py-2 rounded-pill fw-semibold transition-scale'
                            >
                                Try Demo
                            </a>
                            <a 
                                href={learnmore} 
                                className='btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold transition-scale'
                            >
                                Learn More
                            </a>
                        </div>
                        
                        {/* App Store Links */}
                        <div className='d-flex gap-3' style={{ width: '90%', margin: '0 auto' }}>
                            <a href={googleplay} className='transition-scale'>
                                <img 
                                    src="media/WhatsApp Image 2025-10-14 at 07.21.27.jpeg" 
                                    alt="Google Play"
                                    className='img-fluid rounded'
                                    style={{ height: '45px' }}
                                />
                            </a>
                            <a href={appstore} className='transition-scale'>
                                <img 
                                    src="media/WhatsApp Image 2025-10-14 at 07.20.44.jpeg" 
                                    alt="App Store"
                                    className='img-fluid rounded'
                                    style={{ height: '45px' }}
                                />
                            </a>
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
            `}</style>
        </div>
     );
}

export default Left;