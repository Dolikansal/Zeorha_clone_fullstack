import React from 'react';
import Open_account from "../Open_account";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Ticket from './Ticket';

function Support_page() {
    return ( 
        <div>
            <Hero />
            <Ticket />
            <Open_account />
        </div>
     );
}

export default Support_page;