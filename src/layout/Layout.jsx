import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import InnerHeader from '../header/InnerHeader';
import InnerFooter from '../footer/InnerFooter';

const Layout = () => {

  const location = useLocation();
  const homeLocation = location.pathname === "/";

  return (
    <>
        {homeLocation ? <Header/> : <InnerHeader/>}
        <main className={homeLocation ? "el_home_main" : "el_main"}>
          <Outlet/>
        </main>
        {homeLocation ? <Footer/> : <InnerFooter/>}
    </>
  )
}

export default Layout;