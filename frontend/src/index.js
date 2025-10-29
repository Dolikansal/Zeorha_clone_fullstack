// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Home_page from './landing_page/home/Home_page';
// import {BrowserRouter , Routes, Route} from 'react-router-dom';
// import About_page from './landing_page/about/About_page';
// import Price_page from './landing_page/price/Price_page';
// import Product_page from './landing_page/product/Product_page';
// import Signup from './landing_page/signup/Signup';
// import Support_page from './landing_page/support/Support_page';
// import Navbar from './landing_page/Navbar';
// import Footer from './landing_page/Footer';
// import Not_found from './landing_page/Not_found';
// // import Home from './dashboard/src/components/Home';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <BrowserRouter>
//  <Navbar></Navbar>
//     <Routes>
//       <Route path='/' element={<Home_page></Home_page>}></Route>
//       <Route path='/about' element={<About_page></About_page>}></Route>
//       <Route path='/pricing' element={<Price_page></Price_page>}></Route>
//       <Route path='/product' element={<Product_page></Product_page>}></Route>
//       <Route path='/signup' element={<Signup></Signup>}></Route>
//       <Route path='/support' element={<Support_page></Support_page>}></Route>
//       {/* <Route path='/dashboard' element={<Home></Home>}></Route> */}
//       <Route path='*' element={<Not_found></Not_found>}></Route>
//     </Routes>
//   <Footer></Footer>
//  </BrowserRouter>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home_page from './landing_page/home/Home_page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About_page from './landing_page/about/About_page';
import Price_page from './landing_page/price/Price_page';
import Product_page from './landing_page/product/Product_page';
import Signup from './landing_page/signup/Signup';
import Support_page from './landing_page/support/Support_page';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Not_found from './landing_page/Not_found';
import DashboardApp from './dashboard/src/DashboardApp'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Navbar></Navbar>
//     <Routes>
//       <Route path='/' element={<Home_page></Home_page>}></Route>
//       <Route path='/about' element={<About_page></About_page>}></Route>
//       <Route path='/pricing' element={<Price_page></Price_page>}></Route>
//       <Route path='/product' element={<Product_page></Product_page>}></Route>
//       <Route path='/signup' element={<Signup></Signup>}></Route>
//       <Route path='/support' element={<Support_page></Support_page>}></Route>
//       <Route path='/dashboard/*' element={<DashboardApp />}></Route>
//       <Route path='*' element={<Not_found></Not_found>}></Route>
//     </Routes>
//     <Footer></Footer>
//   </BrowserRouter>
// );

function LayoutWrapper({ children, showNavbarFooter = true }) {
  return (
    <>
      {showNavbarFooter && <Navbar />}
      {children}
      {showNavbarFooter && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <LayoutWrapper>
          <Home_page />
        </LayoutWrapper>
      } />
      <Route path='/about' element={
        <LayoutWrapper>
          <About_page />
        </LayoutWrapper>
      } />
      <Route path='/pricing' element={
        <LayoutWrapper>
          <Price_page />
        </LayoutWrapper>
      } />
      <Route path='/product' element={
        <LayoutWrapper>
          <Product_page />
        </LayoutWrapper>
      } />
      <Route path='/support' element={
        <LayoutWrapper>
          <Support_page />
        </LayoutWrapper>
      } />
      
      {/* Routes without navbar and footer */}
      {/* <Route path='/signup' element={
        <LayoutWrapper showNavbarFooter={false}>
          <Signup />
        </LayoutWrapper>
      } /> */}
      <Route path='/dashboard/*' element={
        <LayoutWrapper showNavbarFooter={false}>
          <DashboardApp />
        </LayoutWrapper>
      } />
      
      <Route path='*' element={
        <LayoutWrapper>
          <Not_found />
        </LayoutWrapper>
      } />
    </Routes>
  </BrowserRouter>
);