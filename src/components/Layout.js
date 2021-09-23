import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container p-3 p-m-4'>
      <div className='row justify-content-center'>
        <div className='col-xl-6 col-lg-8 col-md-12'>
          <div className='card'>
            <div className='card-body'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;