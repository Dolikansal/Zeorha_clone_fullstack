import React from 'react';
import Open_account from "../Open_account";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Left from './Left_sec';
import Right from './Right_sec';
import Univers from './Universe';

function Product_page() {
    return ( 
        <div>
            <Hero />
            <Left 
                imgurl="media/Gemini_Generated_Image_us95rous95rous95.png"  
                productname="Kite"  
                productdescript="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                trydemo="#"
                learnmore="#"
                googleplay="#"
                appstore="#"
            />
            <Right
                imgurl="media/Gemini_Generated_Image_6clx8t6clx8t6clx.png"  
                productname="Console"  
                productdescript="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnmore="#"
            />
            <Left 
                imgurl="media/Gemini_Generated_Image_2d24cg2d24cg2d24.png"  
                productname="Coin"  
                productdescript="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                trydemo="#"
                learnmore="#"
                googleplay="#"
                appstore="#"
            />
            <Right
                imgurl="media/Gemini_Generated_Image_5feo7q5feo7q5feo.png"  
                productname="Kite Connect API"  
                productdescript="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnmore="#"
            />
            <Left 
                imgurl="media/Gemini_Generated_Image_p0nl1vp0nl1vp0nl.png"  
                productname="Varsity mobile"  
                productdescript="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                trydemo="#"
                learnmore="#"
                googleplay="#"
                appstore="#"
            />
            <Univers />
            <Open_account />
        </div>
     );
}

export default Product_page;