import React from 'react';
import Hero from './Hero';
import Brokenpage from './Brokeage';
import ZerodhaCharges from './zerodha_equity';
import Account from './account_opening';
function Price_page() {
    return (  
        <div>
            <Hero></Hero>
            <ZerodhaCharges></ZerodhaCharges>
            <Account></Account>
            <Brokenpage></Brokenpage>
        </div>
    );
}

export default Price_page;