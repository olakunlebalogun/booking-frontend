import React from 'react'
import { Link } from 'react-router-dom'
import './../../assets/css/pages/errors/Page404.css'


const Page404 = () => {
  return (
    // <div>
    //   <div id='layoutError'>
    //     <div id='layoutError_content'>
    //       <main>
    //         <div className='container'>
    //           <div className='row justify-content-center'>
    //             <div className='col-lg-6'>
    //               <div className='text-center mt-4'>
    //                 <img
    //                   className='mb-4 img-error'
    //                   src='assets/img/error-404-monochrome.svg'
    //                   alt='error-404'
    //                 />
    //                 <p className='lead'>
    //                   This requested URL was not found on this server.
    //                 </p>
    //                 <a href='index.html'>
    //                   <i className='fas fa-arrow-left me-1'></i>
    //                   Return to Dashboard
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //     <div id='layoutError_footer'>
    //       <footer className='py-4 bg-light mt-auto'>
    //         <div className='container-fluid px-4'>
    //           <div className='d-flex align-items-center justify-content-between small'>
    //             <div className='text-muted'>Copyright &copy; Your Website 2023</div>
    //             {/* <div>
    //               <a href='#'>Privacy Policy</a>
    //               &middot;
    //               <a href='#'>Terms &amp; Conditions</a>
    //             </div> */}
    //           </div>
    //         </div>
    //       </footer>
    //     </div>
    //   </div>

    // </div>

    <div id='notfound'>
      <div class='notfound'>
        <div class='notfound-404'>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        {/* <a href='https:www.google.com'>Homepage</a> */}
        <Link to='/landing'>Homepage</Link>
      </div>
    </div>
  )
}

export default Page404