import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 text-white'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 mb-4'>
                <div className='col'>
                   <img src="media/Gemini_Generated_Image_q9dz23q9dz23q9dz.png" height = "380px"></img>
               </div>
                </div>
                <div className='col-lg-6 col-md-12 d-flex flex-column justify-content-center'>
                    <h2 className='fs-2 mb-4' style={{
                        color: "#ffffff",
                        transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#64b5f6"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}>
                        Free and open market education
                    </h2>
                    
                    <div className='row mt-4 p-3' style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        border: "1px solid rgba(100, 181, 246, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.3)";
                        e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                    }}>
                        <p style={{
                            color: "#e0e0e0",
                            marginBottom: "1rem",
                            transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                        onMouseLeave={(e) => e.target.style.color = "#e0e0e0"}>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="" style={{
                            textDecoration: "none",
                            color: "#64b5f6",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            width: "fit-content"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#2196f3";
                            e.target.style.textDecoration = "underline";
                            e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#64b5f6";
                            e.target.style.textDecoration = "none";
                            e.target.style.transform = "translateX(0)";
                        }}>
                            Varsity →
                        </a>
                    </div>
                    
                    <div className='row mt-4 p-3' style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        border: "1px solid rgba(100, 181, 246, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.3)";
                        e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = "rgba(100, 181, 246, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                    }}>
                        <p style={{
                            color: "#e0e0e0",
                            marginBottom: "1rem",
                            transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                        onMouseLeave={(e) => e.target.style.color = "#e0e0e0"}>
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="" style={{
                            textDecoration: "none",
                            color: "#64b5f6",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            width: "fit-content"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#2196f3";
                            e.target.style.textDecoration = "underline";
                            e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#64b5f6";
                            e.target.style.textDecoration = "none";
                            e.target.style.transform = "translateX(0)";
                        }}>
                            TradingQ&A →
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;