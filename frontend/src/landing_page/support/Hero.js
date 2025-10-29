import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid bg-black py-5'>
            <div className='container'>
                <div className='row align-items-center mb-4'>
                    <div className='col-12 col-md-6'>
                        <h1 className='display-5 fw-bold text-primary mb-3'>Support Portal</h1>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0'>
                        <button className='btn btn-outline-primary px-4 py-2 rounded-1 fw-semibold transition-all'>
                            My tickets
                        </button>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12'>
                        <input 
                            type='text' 
                            placeholder='🔍 Eg: How do I open my account, How do i activate F&O...' 
                            className='form-control form-control-lg border-secondary bg-dark text-white search-input'
                            style={{
                                height: '55px',
                                borderRadius: '0.5rem',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .transition-all {
                    transition: all 0.3s ease;
                }
                .btn-outline-primary:hover {
                    background-color: #0d6efd;
                    transform: translateY(-2px);
                }
                .search-input {
                    transition: all 0.3s ease;
                }
                .search-input:focus {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.1rem rgba(13, 110, 253, 0.1);
                }
                .search-input::placeholder {
                    color: #6c757d;
                }
            `}</style>
        </div>
     );
}

export default Hero;