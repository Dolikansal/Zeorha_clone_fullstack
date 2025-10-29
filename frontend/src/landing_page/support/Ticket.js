import React, { useState } from 'react';

function Ticket() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const sections = [
        {
            title: "Account Opening",
            items: ["Resident individual", "Minor", "Non resident indian (NRI)", "Company , partnership , HUF and LLP", "Glossary"]
        },
        {
            title: "Your Zerodha Account",
            items: ["Your Profile", "Account Modification", "CMR and DP", "Nominatoion", "transfer and conversion of security"]
        },
        {
            title: "Kite",
            items: ["IPO", "Trading FAQ's", "MFT and margins", "Charts and orders", "Alerts and nudegs", "General"]
        },
        {
            title: "Funds",
            items: ["Add money", "withdraw money", "Add bank accounts", "eMandats"]
        },
        {
            title: "Console",
            items: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]
        },
        {
            title: "Coin",
            items: ["Mutual funds", "Nps", "Fixed deposit", "Feature on coins", "Payments and order", "Genreal"]
        }
    ];

    return (
        <div className='container-fluid bg-black py-4'>
            <div className='container'>
                <div className='row g-4'>
                    {/* Left Side - Collapsible Sections */}
                    <div className='col-12 col-lg-6'>
                        <div className='sidebar-card p-4 h-100'>
                            {sections.map((section, index) => (
                                <div key={index} className='section-item mb-3'>
                                    <div 
                                        className='section-header d-flex justify-content-between align-items-center p-3 rounded-1'
                                        onClick={() => toggleSection(index)}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <h5 className='text-primary mb-0 fw-semibold'>{section.title}</h5>
                                        <span className='text-primary transition-rotate'>
                                            {activeSection === index ? '▲' : '▼'}
                                        </span>
                                    </div>
                                    <div 
                                        className='section-content'
                                        style={{
                                            maxHeight: activeSection === index ? '300px' : '0',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: '0 0 0.5rem 0.5rem'
                                        }}
                                    >
                                        <ul className='list-unstyled m-0 p-3'>
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className='mb-2'>
                                                    <a 
                                                        href='#' 
                                                        className='text-light text-decoration-none d-block p-2 rounded-1 transition-all'
                                                        style={{background: 'rgba(255,255,255,0.02)'}}
                                                    >
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Two Sections in One Card */}
                    <div className='col-12 col-lg-6'>
                        <div className='content-card p-4 h-100'>
                            {/* Announcements Section */}
                            <div className='announcements-section mb-5'>
                                <h4 className='text-info mb-3 fw-bold'>Announcements</h4>
                                <div className='d-flex flex-column gap-3'>
                                    <a href='#' className='text-light text-decoration-none p-3 rounded-1 transition-all announcement-item'>
                                        Surveillance measure on scrips - October 2025
                                    </a>
                                    <a href='#' className='text-light text-decoration-none p-3 rounded-1 transition-all announcement-item'>
                                        Rights Entitlements listing in October 2025
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links Section */}
                            <div className='quick-links-section'>
                                <h4 className='text-warning mb-3 fw-bold'>Quick Links</h4>
                                <ol className='list-unstyled m-0'>
                                    {[
                                        "Track Account Opening",
                                        "Track segment activation", 
                                        "Intraday margin",
                                        "Kite user manuals",
                                        "Learn how to create a Ticket"
                                    ].map((link, index) => (
                                        <li key={index} className='mb-2'>
                                            <a 
                                                href='#' 
                                                className='text-light text-decoration-none d-block p-2 rounded-1 transition-all quick-link-item'
                                            >
                                                <span className='text-primary fw-bold me-2'>{index + 1}.</span>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .sidebar-card, .content-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    min-height: 600px;
                }
                .content-card:hover {
                    border-color: rgba(13, 110, 253, 0.2);
                    box-shadow: 0 5px 20px rgba(13, 110, 253, 0.1);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                .transition-rotate {
                    transition: all 0.3s ease;
                }
                .section-header:hover {
                    background: rgba(13, 110, 253, 0.1) !important;
                    border-color: rgba(13, 110, 253, 0.3) !important;
                }
                .announcement-item, .quick-link-item {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .announcement-item:hover, .quick-link-item:hover {
                    background: rgba(13, 110, 253, 0.1) !important;
                    transform: translateX(5px);
                    border-color: rgba(13, 110, 253, 0.2);
                }
                .section-content a:hover {
                    background: rgba(13, 110, 253, 0.1) !important;
                    transform: translateX(5px);
                }
            `}</style>
        </div>
    );
}

export default Ticket;