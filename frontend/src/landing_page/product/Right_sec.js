import React from 'react';

function Left({ imgurl, productname, productdescript, learnmore }) {
    return ( 
        <div className='container-fluid bg-black text-white py-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-between'> 
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
                                href={learnmore} 
                                className='btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold transition-scale'
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mb-4 mb-md-0'>
                        <img 
                            src={imgurl} 
                            alt={productname}
                            className='img-fluid rounded-3 transition-scale'
                        />
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