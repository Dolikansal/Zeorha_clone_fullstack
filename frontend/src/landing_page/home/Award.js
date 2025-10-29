import React from 'react';

function Award() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <img src="media/Gemini_Generated_Image_yj8vbyj8vbyj8vby.png" style={{ height: "350px" }}></img>
                </div>
                <div className='col-lg-6 col-md-12 text-white'>
                    <h1 style={{
                        transition: "color 0.3s ease"
                    }}
                        onMouseEnter={(e) => e.target.style.color = "#64b5f6"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}>
                        Largest stock broker in india
                    </h1>
                    <p>2+ million zerodha clients contribute to over 15% of retail order volume in india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Futures and options</li>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Commidity derivatives</li>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Stocks and IPO's</li>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Direct mutual funds</li>
                                <li style={{
                                    padding: "5px 0",
                                    transition: "transform 0.3s ease, color 0.3s ease"
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        e.target.style.color = "#64b5f6";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                        e.target.style.color = "#ffffff";
                                    }}>• Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/Gemini_Generated_Image_l9t4zal9t4zal9t4.png" className='mt-4' style={{width : "520px"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Award;

