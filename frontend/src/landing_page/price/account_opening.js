// import React from 'react';
// function Account() {
import React from 'react';

function Account() {
    return ( 
        <div className='container-fluid bg-black py-5'>
            <div className='container'>
                {/* Account Opening Charges */}
                <div className='row justify-content-center mb-5'>
                    <div className='col-12 col-lg-10'>
                        <div className='charges-card p-4 p-lg-5 mb-4'>
                            <h2 className='display-6 fw-bold text-primary text-center mb-4 transition-scale'>
                                Charges for account opening
                            </h2>
                            <div className='table-responsive'>
                                <table className='table table-dark table-hover table-borderless'>
                                    <thead>
                                        <tr className='border-bottom border-secondary'>
                                            <th className='text-primary fs-5 py-3'>Type of account</th>
                                            <th className='text-primary fs-5 py-3 text-center'>Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow account="Online account" charges="Free" isFree={true} />
                                        <TableRow account="Offline account" charges="Free" isFree={true} />
                                        <TableRow account="NRI account (offline only)" charges="₹ 500" isFree={false} />
                                        <TableRow account="Partnership, LLP, HUF, or Corporate accounts (offline only)" charges="₹ 500" isFree={false} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demat AMC Charges */}
                <div className='row justify-content-center mb-5'>
                    <div className='col-12 col-lg-10'>
                        <div className='charges-card p-4 p-lg-5 mb-4'>
                            <h2 className='display-6 fw-bold text-info text-center mb-4 transition-scale'>
                                Demat AMC (Annual Maintenance Charge)
                            </h2>
                            <div className='table-responsive'>
                                <table className='table table-dark table-hover table-borderless'>
                                    <thead>
                                        <tr className='border-bottom border-secondary'>
                                            <th className='text-info fs-5 py-3'>Value of holdings</th>
                                            <th className='text-info fs-5 py-3 text-center'>AMC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow account="Up to ₹4 lakh" charges="Free" isFree={true} />
                                        <TableRow account="₹4 lakh - ₹10 lakh" charges="₹ 100 per year, charged quarterly*" isFree={false} />
                                        <TableRow account="Above ₹10 lakh" charges="₹ 300 per year, charged quarterly" isFree={false} />
                                    </tbody>
                                </table>
                            </div>
                            <p className='text-light opacity-75 mt-4 fs-6 transition-slide'>
                                Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Optional Services Charges */}
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-10'>
                        <div className='charges-card p-4 p-lg-5'>
                            <h2 className='display-6 fw-bold text-warning text-center mb-4 transition-scale'>
                                Charges for optional value added services
                            </h2>
                            <div className='table-responsive'>
                                <table className='table table-dark table-hover table-borderless'>
                                    <thead>
                                        <tr className='border-bottom border-secondary'>
                                            <th className='text-warning fs-5 py-3'>Service</th>
                                            <th className='text-warning fs-5 py-3 text-center'>Billing Frequency</th>
                                            <th className='text-warning fs-5 py-3 text-center'>Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ServiceRow service="Tickertape" frequency="Monthly / Annual" charges="Free: 0 | Pro: 249/2399" />
                                        <ServiceRow service="Smallcase" frequency="Per transaction" charges="Buy & Invest More: 100 | SIP: 10" />
                                        <ServiceRow service="Kite Connect" frequency="Monthly" charges="Connect: 500 | Personal: Free" />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .charges-card {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }
                .charges-card:hover {
                    border-color: rgba(13, 110, 253, 0.3);
                    box-shadow: 0 15px 35px rgba(13, 110, 253, 0.15);
                    transform: translateY(-5px);
                }
                .transition-scale {
                    transition: all 0.3s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.02);
                    text-shadow: 0 0 20px rgba(13, 110, 253, 0.3);
                }
                .transition-slide {
                    transition: all 0.3s ease;
                    transform: translateX(0);
                }
                .transition-slide:hover {
                    transform: translateX(10px);
                    color: #e9ecef !important;
                }
                .table-row {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .table-row:hover {
                    background: rgba(13, 110, 253, 0.1) !important;
                    transform: translateX(5px);
                    border-color: rgba(13, 110, 253, 0.3);
                }
            `}</style>
        </div>
    );
}

const TableRow = ({ account, charges, isFree }) => (
    <tr className='table-row'>
        <td className='text-light fs-6 py-3' style={{background: 'rgba(255,255,255,0.02)'}}>
            {account}
        </td>
        <td className={`fw-bold text-center py-3 ${isFree ? 'text-success' : 'text-warning'}`} style={{background: 'rgba(255,255,255,0.02)'}}>
            {charges}
        </td>
    </tr>
);

const ServiceRow = ({ service, frequency, charges }) => (
    <tr className='table-row'>
        <td className='text-light fs-6 py-3 fw-semibold' style={{background: 'rgba(255,255,255,0.02)'}}>
            {service}
        </td>
        <td className='text-light text-center py-3' style={{background: 'rgba(255,255,255,0.02)'}}>
            {frequency}
        </td>
        <td className='text-info text-center py-3 fw-bold' style={{background: 'rgba(255,255,255,0.02)'}}>
            {charges}
        </td>
    </tr>
);

export default Account;