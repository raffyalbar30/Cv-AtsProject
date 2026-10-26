import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#0F172A] antialiased">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>

    );
}

export default Layout;
