import React from 'react';
import Nav from './Nav';
import Delivery from './Delivery';

const Layout = () => {
  return (
    <>
      <div className='container'>
        <Nav/>
        <div className='link_box'>
          <Delivery/>
        </div>
      </div>
    </>
  )
}

export default Layout